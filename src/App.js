import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/main/main";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Main} />
    </Router>
  );
};

export default App;
