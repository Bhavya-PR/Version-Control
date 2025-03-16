import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
