import React from "react";
import { goodsList } from "../../config";
import "./styles.scss";
import PropTypes from "prop-types";
import ShopItemCard from "../ShopItemCard/ShopItemCard";
import Paper from "@material-ui/core/Paper";
import { isAlreadyAdded } from "../../../ShoppingCart/utils";

const Shop = ({ handleAddToCart, handleRemoveFromCart, cartItems }) => {
  return (
    <div className="shop-container">
      <Paper className="title">Магазин</Paper>
      <div className="goods-area">
        {goodsList.map((goodsItem, index) => (
          <ShopItemCard
            key={index}
            shopItem={goodsItem}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            isAlreadyAdded={isAlreadyAdded(cartItems, goodsItem.id)}
          />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array,
};

export default React.memo(Shop);
