// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/NavBar.css'; // Importing styles

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img 
            src="../images/rpslogo.jpeg" // Replace with your actual logo path, e.g., /images/logo.png
            alt="RPS International School Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/signup" className="navbar-link">Signup</Link>
      </div>
    </nav>
  );
};

export default NavBar;
