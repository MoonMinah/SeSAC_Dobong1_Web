import { todoReducer } from "./module/todo";
import { combineReducers } from "redux";

export default combineReducers({
  todo: todoReducer,
});
