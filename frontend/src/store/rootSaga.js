import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import { authSaga } from "../pages/Login/sagas/index";
import { userDashboardSaga } from "../pages/UserDashboard/sagas";

function* rootSaga() {
  yield all([authSaga(), userDashboardSaga()]);
}

export default rootSaga;
