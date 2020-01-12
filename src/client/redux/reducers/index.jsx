import { combineReducers } from "redux";
import ui from "./uiReducer.jsx";
import users from "./userReducer.jsx";

export default combineReducers({
  ui,
  users
});
