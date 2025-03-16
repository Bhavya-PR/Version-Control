import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./SignIn.css"; // Import the CSS file for styling

const SignIn = () => {
  return (
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
        Don't have an account? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
};

export default SignIn;
