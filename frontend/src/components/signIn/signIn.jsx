import React from "react";
import "./sign_in.scss";

function SignIn() {
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form className="sign-in-form">
        <div className="form-group">
          <label htmlFor="username-email">Username or Email:</label>
          <input
            type="text"
            id="username-email"
            name="username-email"
            placeholder="Enter username or email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Sign In</button>
        <div className="error-message" aria-live="polite"></div>
      </form>
    </div>
  );
}

export default SignIn;
