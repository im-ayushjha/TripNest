import { useState } from 'react';
import './loginregister.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Signup () {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [phone,setPhone] = useState();
    const [isError, setisError] = useState(false);
    const [error, setError] = useState("Some Error Occured!")
    const handleSubmit = async (e) => {
        e.preventDefault();

        setisError(false);
        if (!name || !email || !pass) {
            setError("Some Fields are Missing!")
            setisError(true);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/signup",
                {
                    name: name,
                    email: email,
                    password: pass,
                    phoneNumber:phone
                }
            );
            console.log(response);
            if (!response) {
                setisError(true);
                setError("Something went wrong")
                return;
            } else {
                setError(response.data.error);
                setisError(false);
            }
            if (response.data.error === "email already used") {
                setisError(true);
                setError(response.data.error);
                
                console.log(response.data.error);
            }
             else window.alert("Registered successfully");
        } catch (error) {
            setisError(true);
        }
    }
    return (
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="brand">
                <h3 className="login-title">Register</h3>
              </div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="submit">Register</button>
              <span>
                Already have an account? <Link to="/signin">Login</Link>
              </span>
            </form>
          </div>
        </div>
      );
}

export default Signup;