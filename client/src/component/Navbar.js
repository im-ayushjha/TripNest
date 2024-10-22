// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css'; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">TRIPNEXT</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
