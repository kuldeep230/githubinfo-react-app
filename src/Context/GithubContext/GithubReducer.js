import { ALL_USERS, SET_LOADING, RESET_LOADING } from "../types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
