// components/Login.js
import React, { useState } from 'react';
import NavBar from './Navbar';
import './Login.css'; // Importing CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Clear error message and log details (Replace this with API call if needed)
    setError('');
    console.log('Login details:', email, password);

    // Reset form (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        
        {/* Display error message if there's any */}
        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
