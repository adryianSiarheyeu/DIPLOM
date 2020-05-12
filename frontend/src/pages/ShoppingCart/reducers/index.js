import { handleActions } from "redux-actions";
import * as actions from "../actions/index";
import { calculateCartItemPrice } from "../utils";
import { goodsList } from "../../Shop/config/index";

export const initialState = {
  itemsList: [],
  errors: null,
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
    [actions.editItemQuantity](state, { payload }) {
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
  },
  initialState
);
