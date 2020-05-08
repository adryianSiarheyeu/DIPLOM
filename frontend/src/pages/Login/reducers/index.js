import { handleActions } from "redux-actions";
import * as actions from "../actions/index";
import * as globalActions from "../../../actions/globalActions";

export const initialState = {
  isAccountCreated: false,
  registerResponseMessage: null,
  isLoading: false,
  isAuth: false,
  aceessToken: null,
  errors: null,
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
    [actions.signInStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.signInSuccess](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        accessToken: payload.access_token,
        isAuth: true,
      };
    },
    [actions.signInFail](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        errors: "Email or password incorrect",
        isAuth: false,
      };
    },
    [actions.logOutSuccess](state, { payload }) {
      return {
        ...state,
        isAuth: false,
      };
    },
    [globalActions.checkToken](state, { payload }) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [globalActions.checkTokenSuccess](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    },
    [globalActions.checkTokenFail](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
      };
    },
  },
  initialState
);
