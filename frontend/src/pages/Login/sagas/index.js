import axios from "axios";
import { put, takeEvery, all, call } from "redux-saga/effects";

import * as signActions from "../actions/index";
import * as signAPI from "../api/index";
import * as globalActions from "../../../actions/globalActions";
import api from "../../../config/apiConfig";

function* signUp(action) {
  try {
    const response = yield signAPI.signUp(action.payload);

    yield put(signActions.signUpSuccess(response.data));
  } catch (error) {
    yield put(signActions.signUpFail(error.message));
  }
}

function* signUpWatcher() {
  yield takeEvery(signActions.signUpStart, signUp);
}

function* signIn(action) {
  try {
    const response = yield signAPI.login(action.payload);

    axios.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
    api.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
    localStorage.setItem("token", response.data.access_token);

    yield put(signActions.signInSuccess(response.data));
  } catch (error) {
    yield put(signActions.signInFail(error));
  }
}

function* checkToken() {
  const token = yield localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    yield put(globalActions.checkTokenSuccess());
  } else {
    yield put(globalActions.checkTokenFail());
  }
}

function* logout() {
  yield localStorage.removeItem("token");
}

function* logoutWatcher() {
  yield takeEvery(signActions.logOutSuccess, logout);
}

function* checkTokenWatcher() {
  yield takeEvery(globalActions.checkToken, checkToken);
}

function* signInWatcher() {
  yield takeEvery(signActions.signInStart, signIn);
}

export function* authSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
    checkTokenWatcher(),
    logoutWatcher(),
  ]);
}
