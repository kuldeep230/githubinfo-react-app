import axios from "axios";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
//All Components..
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
    user: {},
    repos: [],
    id: "",
  };
  getAllUsers = async () => {
    try {
      this.setState({ loading: true });
      let res = await axios.get("https://api.github.com/users");
      this.setState({ users: res.data, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };
  searchUsers = async (text) => {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      this.setState({ users: data.items, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };
  getUserAndRepoInfo = async (user) => {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(`https://api.github.com/users/${user}`);
      this.setState({ user: data });
      let res = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=9`
      );
      this.setState({ repos: res.data, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
    }
  };
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
            <Route
              exact
              path="/user/:userId"
              render={(props) => (
                <Profile
                  getUserAndRepoInfo={this.getUserAndRepoInfo}
                  repos={this.state.repos}
                  user={this.state.user}
                  loading={this.state.loading}
                  id={this.state.id}
                  {...props}
                />
              )}
            />
            <Route exact path="/">
              <Users
                getAllUsers={this.getAllUsers}
                users={this.state.users}
                loading={this.state.loading}
                searchUsers={this.searchUsers}
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
