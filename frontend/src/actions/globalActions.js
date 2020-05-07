import { createAction } from "redux-actions";

export const checkToken = createAction("CHECK_TOKEN");
export const checkTokenSuccess = createAction("CHECK_TOKEN_SUCCESS");
export const checkTokenFail = createAction("CHECK_TOKEN_FAIL");
