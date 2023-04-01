import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
    if (response.ok) {
      // Signup successful, save authentication token to local storage
      localStorage.setItem('authToken', data);
    } else {
      // Signup unsuccessful, display error message
      alert(data.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title `}></div>
      </div>
      <div className="form-container">
        <label htmlFor="signup">Sign up</label>
        <div className="form-inner">
          <form onSubmit={handleSignup}>
            <div className="field">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
            </div>
            <div className="field">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Sign up" />
            </div>
            <div className="signup-link">Already a member? <Link to="/login">Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
