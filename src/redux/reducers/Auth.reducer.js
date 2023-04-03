// export const SET_USER = "SET_USER";

import { SET_USER, LOG_OUT } from "redux/types/types";

const initialState = {
  user: null,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
