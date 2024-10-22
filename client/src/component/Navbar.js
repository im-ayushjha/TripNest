import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './Nav.css'; // Import your CSS file

function Navbar() {
  const navigate = useNavigate();

  // Check if a token is present in sessionStorage (to know if logged in)
  const isLoggedIn = !!sessionStorage.getItem("token");

  // Get user information (stored in sessionStorage)
  const user = JSON.parse(sessionStorage.getItem("user"));

  // State to toggle dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Logout function to clear session storage and navigate to login page
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate('/signin'); // Redirect to login page after logout
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">TRIPNEXT</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn ? (
          <>
            {/* Profile dropdown */}
            <li className="profile-dropdown">
              <Link onClick={toggleDropdown} className="profile-name">
                Profile {/* Display user's name */}
                <i className={`arrow ${dropdownOpen ? 'up' : 'down'}`}></i>

              </Link>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <p><strong>Name:</strong> {user?.name}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <Link className="logout-btn" onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </li>
          </>
        ) : (
          <>
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;