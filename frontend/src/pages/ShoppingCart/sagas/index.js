import { put, takeEvery, all, call } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as orderAPI from "../api/index";
import * as signActions from "../../Login/actions";

function* sendOrder(action) {
  try {
    yield orderAPI.sendOrder(action.payload);

    yield put(actions.sendOrderSuccess());
  } catch (error) {
    yield put(actions.sendOrderFail(error.message));
  }
}

function* sendOrderWatcher() {
  yield takeEvery(actions.sendOrderStart, sendOrder);
}

export function* orderSaga() {
  yield all([sendOrderWatcher()]);
}
