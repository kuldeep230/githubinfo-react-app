import axios from "axios";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
//All Components..
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [id] = useState("");

  const getAllUsers = async () => {
    try {
      setLoading(true);
      let res = await axios.get("https://api.github.com/users");
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const searchUsers = async (text) => {
    try {
      setLoading(true);
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const getUserAndRepoInfo = async (user) => {
    try {
      setLoading(false);
      let { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUser(data);
      let res = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=9`
      );
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

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
                getUserAndRepoInfo={getUserAndRepoInfo}
                repos={repos}
                user={user}
                loading={loading}
                id={id}
                {...props}
              />
            )}
          />
          <Route exact path="/">
            <Users
              getAllUsers={getAllUsers}
              users={users}
              loading={loading}
              searchUsers={searchUsers}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
