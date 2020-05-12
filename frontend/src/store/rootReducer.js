import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createBlacklistFilter } from "redux-persist-transform-filter";

import auth from "../pages/Login/reducers/index";
import user from "../pages/UserDashboard/reducers/index";
import shoppingCart from "../pages/ShoppingCart/reducers/index";

const saveSubsetBlacklistFilter = createBlacklistFilter("auth", ["error"]);

const persistConfig = {
  key: "root",
  storage,
  blacklist: [""],
  transforms: [saveSubsetBlacklistFilter],
};

const rootReducer = combineReducers({ auth, user, shoppingCart });

export default persistReducer(persistConfig, rootReducer);
