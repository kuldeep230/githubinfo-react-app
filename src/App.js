import { Switch, Route } from "react-router-dom";

import "./App.css";
//All Components..
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import GithubState from "./Context/GithubContext/GithubState";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import Users from "./Components/Users/Users";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-red-500 px-4 sm:px-6 lg:px-16    hover:from-pink-700 hover:to-yellow-400 ">
      <GithubState>
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
              render={(props) => <Profile {...props} />}
            />
            <Route exact path="/">
              <Users />
            </Route>
          </Switch>
        </div>
      </GithubState>
    </div>
  );
};
export default App;
