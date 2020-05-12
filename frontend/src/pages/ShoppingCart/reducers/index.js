import { handleActions } from "redux-actions";
import * as actions from "../actions/index";
import { calculateCartItemPrice } from "../utils";
import { goodsList } from "../../Shop/config/index";
import { clearSuccessState } from "../../UserDashboard/actions";

export const initialState = {
  itemsList: [],
  errors: null,
  isLoading: false,
  success: false,
};

export default handleActions(
  {
    [actions.addItemToOrder](state, { payload }) {
      return { ...state, itemsList: [...state.itemsList, payload] };
    },
    [actions.removeItemFromOrder](state, { payload }) {
      const cartCopy = [...state.itemsList];
      const itemIndexToRemove = cartCopy.findIndex(
        (item) => item.id === payload
      );

      cartCopy.splice(itemIndexToRemove, 1);
      return { ...state, itemsList: cartCopy };
    },
    [actions.editItem](state, { payload }) {
      const { id, value, fieldToEdit } = payload;
      const cartCopy = [...state.itemsList];
      const itemToEdit = cartCopy.find((item) => item.id === id);

      if (fieldToEdit === "quantity") {
        const initialPrice = goodsList.find((item) => item.id === id).price;
        itemToEdit[fieldToEdit] = +value;

        itemToEdit.price = +calculateCartItemPrice(
          initialPrice,
          itemToEdit.quantity
        );

        return { ...state, itemsList: cartCopy };
      } else {
        itemToEdit[fieldToEdit] = value;

        return { ...state, itemsList: cartCopy };
      }
    },
    [actions.sendOrderStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.sendOrderSuccess](state) {
      return { ...state, isLoading: false, success: true, itemsList: [] };
    },
    [actions.sendOrderFail](state, { payload }) {
      return { ...state, isLoading: false, success: false, errors: payload };
    },
    [actions.clearSuccessState](state, { payload }) {
      return initialState;
    },
  },
  initialState
);
