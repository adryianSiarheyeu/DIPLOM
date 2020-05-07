import { handleActions } from "redux-actions";
import * as actions from "../actions/index";

export const initialState = {
  isAccountCreated: false,
  registerResponseMessage: null,
  isLoading: false,
};

export default handleActions(
  {
    [actions.signUpStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.signUpSuccess](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        isAccountCreated: payload.success,
        registerResponseMessage: payload.message,
      };
    },
    [actions.signUpFail](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        registerResponseMessage: payload,
        isAccountCreated: false,
      };
    },
  },
  initialState
);
