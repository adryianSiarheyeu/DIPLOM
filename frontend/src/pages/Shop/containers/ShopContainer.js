import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Shop from "../components/Shop/Shop";
import {
  addItemToOrder,
  removeItemFromOrder,
} from "../../ShoppingCart/actions";
import { materials } from "../config";

const ShopContainer = ({}) => {
  const dispatch = useDispatch();
  const cartItemsSelector = useSelector(
    (state) => state.shoppingCart.itemsList
  );

  const handleAddToCart = useCallback((itemToAdd) => {
    dispatch(
      addItemToOrder({ ...itemToAdd, quantity: 1, material: materials[0] })
    );
  }, []);

  const handleRemoveFromCart = useCallback(
    (itemId) => {
      dispatch(removeItemFromOrder(itemId));
    },
    [cartItemsSelector]
  );

  return (
    <Shop
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      cartItems={cartItemsSelector}
    />
  );
};

ShopContainer.propTypes = {};

export default React.memo(ShopContainer);
