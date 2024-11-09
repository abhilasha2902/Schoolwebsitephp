import React from 'react';
import NavBar from './Navbar';
import   './Contact.css';
const Contact = () => {
  return (
    <div className="page-container contact-section">
      <NavBar/>
      <h2 className="page-title3">Contact Us</h2>
      <p>Email: <a href="mailto:contact@rpsschool.com">contact@rpsschool.com</a></p>
      <p>Phone: +1 123 456 7890</p>
      <p>Address: 123, School Lane, Education City, NY</p>
    </div>
  );
};

export default Contact;
