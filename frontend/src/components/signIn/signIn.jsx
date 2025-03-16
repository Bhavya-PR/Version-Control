import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./SignIn.css"; // Import the CSS file for styling
import RewindXLogo from "../../assets/RewindXLogo.png";

const SignIn = () => {
  return (
    <>
      <div className="logo-container">
        <img src={RewindXLogo} alt="RewindX Logo" className="rewindx-logo" />
        <h1 className="rewindx-title">RewindX</h1>
      </div>
      <div className="container">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
