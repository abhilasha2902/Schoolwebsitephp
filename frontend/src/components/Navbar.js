import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/rpslogo.jpeg';

const NavBar = () => {
  return (
    <nav className="bg-primary-blue p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="RPS International School Logo"
            className="h-14 w-14 rounded-full hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <div className="flex space-x-8 text-primary-yellow">
          {['Home', 'About', 'Contact'].map((text, index) => (
            <Link
              key={index}
              to={text.toLowerCase() === 'home' ? '/' : `/${text.toLowerCase()}`}
              className="flex items-center space-x-2 hover:text-white hover:underline transition-all duration-300"
            >
              <span className="capitalize">{text}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
