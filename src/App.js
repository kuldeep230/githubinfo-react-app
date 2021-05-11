import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

class App extends Component {
  render() {
    return (
      <div className="bg-gradient-to-r from-purple-500 to-red-500 px-4 sm:px-6 lg:px-16    hover:from-pink-700 hover:to-yellow-400 ">
        <div>
          <Navbar title="GitHubInfo" icon="fab fa-github" />
        </div>
        <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />{" "}
            <Route exact path="/user/:userId" component={Profile} />
            <Route exact path="/" component={Users} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
