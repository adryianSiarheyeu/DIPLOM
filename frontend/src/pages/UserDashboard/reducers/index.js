import { handleActions } from "redux-actions";
import * as actions from "../actions/index";

export const initialState = {
  info: {},
  isLoading: false,
  errors: null,
};

export default handleActions(
  {
    [actions.getUserProfileStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getUserProfileSuccess](state, { payload }) {
      return { ...state, isLoading: false, info: { ...payload } };
    },
    [actions.getUserProfileFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    },
  },
  initialState
);
