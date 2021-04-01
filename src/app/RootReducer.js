import { combineReducers } from "redux";
import Info from "../reducers/info";

const createRootReducer = () =>
  combineReducers({
    Info
  });

export default createRootReducer;
