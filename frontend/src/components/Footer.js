import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Contact Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-primary-yellow">Contact Us</h4>
          <p>RPS International School</p>
          <p>Email: info@rpsschool.com</p>
          <p>Phone: 7781010281</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-primary-yellow">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Courses', 'Admission'].map((text, index) => (
              <li key={index}>
                <a
                  href={`#${text.toLowerCase()}`}
                  className="hover:text-primary-yellow transition-colors duration-300 transform hover:scale-105"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-primary-yellow">Follow Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-10 border-t border-blue-400">
        <p className="animate-bounce">
          &copy; {new Date().getFullYear()} RPS International School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
