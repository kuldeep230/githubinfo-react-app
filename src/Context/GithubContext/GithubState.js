import React, { useReducer } from "react";
import { SET_LOADING, RESET_LOADING, ALL_USERS, SET_USER_REPO } from "../types";

import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getAllUsers = async () => {
    try {
      dispatch({ type: SET_LOADING });
      let res = await axios.get("https://api.github.com/users");
      dispatch({ type: ALL_USERS, payload: res.data });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
    }
  };
  const getUserAndRepoInfo = async (user) => {
    try {
      dispatch({ type: SET_LOADING });
      let { data } = await axios.get(`https://api.github.com/users/${user}`);
      let res = await axios.get(
        `https://api.github.com/users/${user}/repos?per_page=9`
      );
      dispatch({
        type: SET_USER_REPO,
        payload: {
          user: data,
          repos: res.data,
          loading: false,
        },
      });
      dispatch({ type: RESET_LOADING });
    } catch (error) {
      dispatch({ RESET_LOADING });
    }
  };

  const searchUsers = async (text) => {
    try {
      dispatch({ type: SET_LOADING });
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      dispatch({ type: ALL_USERS, payload: data.items });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
    }
  };

  return (
    <GithubContext.Provider
      value={{ ...state, getAllUsers, getUserAndRepoInfo, searchUsers }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
