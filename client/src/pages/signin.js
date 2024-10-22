import { useState } from 'react';
import { Link,useNavigate} from "react-router-dom";
import axios from 'axios';

import './loginregister.css'

const Signin = () => {
   const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [isError, setisError] = useState(false);
    const [error, setError] = useState("Some Error Occured!");
    const check = async (e) => {
        e.preventDefault();

        setisError(false);
        if (!email || !pass) {
            setError("Some Fields are Missing!");
            setisError(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/signin", {
                email: email,
                password: pass,
            });
            // console.log(response);
            if (!response) {
                setisError(true);
                setError("Something went wrong");
                return;
            } else {
                setisError(false);
            }
            if (response.data.message === "User does not exist") {
                // window.alert('User does not exist')
                setisError(true)
                setError(response.data.message);
                return;
            } else if (response.data.message === "Invalid Password") {
                setisError(true)
                setError("Invalid email or Password");
                return;
            }
            // setloginId({ userId: response.data.userInfo._id, userName: response.data.userInfo.name, userEmail: response.data.userInfo.email, quizIds: response.data.userInfo.attemptedQuizes })
            // console.log('here is data recieved',response)
            console.log(response.data.userInfo);
            navigate('/',{state:{val:response.data.userInfo}});
            // window.alert("User Login successfully");
            // <Navigate to="/"  />
        } catch (error) {
            setisError(true);
            setError("An error occurred during login");
            console.log(error);
        }
    }
    return (
        <div className="container">
          <div className="form-container">
            <form onSubmit={check}>
              <div className="brand">
                <h3 className="login-title">LOGIN</h3>
              </div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="submit">Login</button>
              <span>
                Don't have an account? <Link to="/signup">Register</Link>
              </span>
            </form>
          </div>
        </div>
      );
}

export default Signin;