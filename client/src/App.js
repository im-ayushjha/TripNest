
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";

import SignIn from './pages/Signin';
// import About from './pages/about';
import SignUp from './pages/Signup';
import Navbar from './component/Navbar';
import Card from './component/Card';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
