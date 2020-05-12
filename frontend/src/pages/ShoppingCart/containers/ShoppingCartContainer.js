import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { editItemQuantity, removeItemFromOrder } from "../actions";

const ShoppingCartContainer = ({}) => {
  const { itemsList } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback(
    (itemId) => {
      dispatch(removeItemFromOrder(itemId));
    },
    [itemsList]
  );

  const onHandleItemChange = useCallback(
    (payload) => {
      if (payload.fieldToEdit === "quantity") {
        if (+payload.value <= 1) {
          dispatch(
            editItemQuantity({
              id: payload.id,
              value: 1,
              fieldToEdit: "quantity",
            })
          );
        } else {
          dispatch(editItemQuantity(payload));
        }
      } else {
        dispatch(editItemQuantity(payload));
      }
    },
    [itemsList]
  );

  const onHandleSubmit = useCallback(
    (data) => {
      const { address, paymentMethod, goods } = data;
      console.log({ address, paymentMethod, goods });
    },
    [itemsList]
  );

  return (
    <ShoppingCart
      handleRemoveFromCart={handleRemoveFromCart}
      itemsList={itemsList}
      onHandleItemChange={onHandleItemChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
};

ShoppingCartContainer.propTypes = {};

export default ShoppingCartContainer;
