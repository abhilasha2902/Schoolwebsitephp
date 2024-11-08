// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../pages/NavBar.css'; // Optional: for adding styles

const NavBar = () => {
  return (
    <nav className="navbar">
     
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
