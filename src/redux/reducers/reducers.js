import { combineReducers } from "redux";
import { blogReducer } from "./blog.reducer";
import { getUserReducer } from "./Auth.reducer";

export const reducers = combineReducers({
  blog: blogReducer,
  user: getUserReducer,
});
