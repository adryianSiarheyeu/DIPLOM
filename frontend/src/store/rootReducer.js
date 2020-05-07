import { combineReducers } from "redux";
import user from "../pages/Login/reducers/index";

const rootReducer = combineReducers({ user });

export default rootReducer;
