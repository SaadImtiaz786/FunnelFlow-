import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Login.css';

function Login() {
  const [email , setEmail] = useState('') 
  const [password , setPassword] = useState('') 
  const handleLogin = async (e) => {
    const response = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
      // Login successful, save authentication token to local storage
      localStorage.setItem('authToken', data);
    } else {
      // Login unsuccessful, display error message
      alert(data.message);
    }
  };
  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title `}></div>
      </div>
      <div className="form-container">
        <label htmlFor="login">Login</label>
        <div className="form-inner">
          <form action="#">
            <div className="field">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn" onClick={handleLogin}>
              <div className="btn-layer"></div>
              <input type="submit" />
            </div>
            <div className="signup-link">Not a member? <Link to="/signup">Sign up</Link></div>
          </form>
        </div>
      </div>
    </div>
  );

  
}

export default Login;