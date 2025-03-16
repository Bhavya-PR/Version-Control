import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/signIn/signIn"; // Adjust the import path as necessary
import SignUp from "./components/signUp/signUp"; // Adjust the import path as necessary

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default App;
