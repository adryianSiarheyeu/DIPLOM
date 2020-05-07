import { put, takeLatest, takeEvery, all, call } from "redux-saga/effects";
import * as signActions from "../actions/index";
import * as signAPI from "../api/index";

export function* signUp(action) {
  try {
    const response = yield signAPI.signUp(action.payload);

    yield put(signActions.signUpSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    yield put(signActions.signUpFail(error.message));
  }
}

export function* signUpWatcher() {
  yield takeEvery(signActions.signUpStart, signUp);
}

export function* signIn(action) {
  try {
    const response = yield signAPI.login(action.payload);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* signInWatcher() {
  yield takeEvery(signActions.signInStart, signIn);
}

export function* authSaga() {
  yield all([signUpWatcher(), signInWatcher()]);
}
