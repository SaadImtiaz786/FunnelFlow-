import React from 'react';
import './Login.css';

function Login() {
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
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" />
            </div>
            <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;