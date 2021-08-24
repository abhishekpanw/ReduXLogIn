import React from "react";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  const dispatch = useDispatch();

  // useEffect(()=>{

  //   dispatch(loadUser())
  // },[dispatch])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
