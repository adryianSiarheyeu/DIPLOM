import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import { authSaga } from "../pages/Login/sagas/index";

function* rootSaga() {
  yield all([authSaga()]);
}

export default rootSaga;
