import { combineReducers } from "redux";
import auth from "../pages/Login/reducers/index";
import user from "../pages/UserDashboard/reducers/index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  createFilter,
  createBlacklistFilter,
} from "redux-persist-transform-filter";

const saveSubsetBlacklistFilter = createBlacklistFilter("auth", ["error"]);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
  transforms: [saveSubsetBlacklistFilter],
};

const rootReducer = combineReducers({ auth, user });

export default persistReducer(persistConfig, rootReducer);
