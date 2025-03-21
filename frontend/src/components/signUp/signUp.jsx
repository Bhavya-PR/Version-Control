import React, { useState } from "react";
import { Link } from "react-router-dom";
import RewindXLogo from "../../assets/RewindXLogo.png";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_@%&#]*$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  
    if (!username) {
      newErrors.username = "Username is required.";
    } else if (!usernamePattern.test(username)) {
      newErrors.username =
        "Username must start with a letter and can include letters, numbers, and symbols like _@%&#.";
    }
  
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format.";
    }
  
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one symbol, with no spaces.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle successful submission (e.g., send data to API)
      console.log("Form submitted:", { username, email, password });
    }
  };

  return (
    <>
      <div className="logo-container">
        <img src={RewindXLogo} alt="RewindX Logo" className="rewindx-logo" />
        <h1 className="rewindx-title">RewindX</h1>
      </div>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin-text">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
