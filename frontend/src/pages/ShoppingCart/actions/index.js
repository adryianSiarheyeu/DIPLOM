import { createAction } from "redux-actions";

export const addItemToOrder = createAction("ADD_ITEM_TO_ORDER");
export const removeItemFromOrder = createAction("REMOVE_ITEM_FROM_ORDER");
export const editItemQuantity = createAction("EDIT_ITEM_QUANTITY");

export const sendOrderStart = createAction("SEND_ORDER_START");
export const sendOrderSuccess = createAction("SEND_ORDER_SUCCESS");
export const sendOrderFail = createAction("SEND_ORDER_FAIL");
