import { combineReducers } from "redux";
import auth from "../pages/Login/reducers/index";
import user from "../pages/UserDashboard/reducers/index";

const rootReducer = combineReducers({ auth, user });

export default rootReducer;
