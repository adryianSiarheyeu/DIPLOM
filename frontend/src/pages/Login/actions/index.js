import { createAction } from "redux-actions";

export const signInStart = createAction("SIGN_IN_START");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFail = createAction("SIGN_IN_FAIL");

export const signUpStart = createAction("SIGN_UP_START");
export const signUpSuccess = createAction("SIGN_UP_SUCCESS");
export const signUpFail = createAction("SIGN_UP_FAIL");

export const logOutSuccess = createAction("LOG_OUT_SUCCESS");

export const clearErrors = createAction("CLEAR_ERRORS");
