import { put, takeEvery, all, call } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as apiCalls from "../api/index";

function* getUser() {
  try {
    const response = yield apiCalls.getUserProfile();

    yield put(actions.getUserProfileSuccess(response.data));
  } catch (error) {
    yield put(actions.getUserProfileFail());
  }
}

function* getUserWatcher() {
  yield takeEvery(actions.getUserProfileStart, getUser);
}

export function* userDashboardSaga() {
  yield all([getUserWatcher()]);
}
