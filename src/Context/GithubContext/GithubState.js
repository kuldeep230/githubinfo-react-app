import React, { useReducer } from "react";
import { SET_LOADING, RESET_LOADING, ALL_USERS } from "../types";

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
  return (
    <GithubContext.Provider value={{ ...state, getAllUsers }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
