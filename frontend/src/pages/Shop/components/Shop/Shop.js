import React from "react";
import { goodsList } from "../../config";
import "./styles.scss";
import PropTypes from "prop-types";
import ShopItemCard from "../ShopItemCard/ShopItemCard";
import Paper from "@material-ui/core/Paper";

const Shop = ({}) => {
  return (
    <div className="shop-container">
      <Paper className="title">Магазин</Paper>
      <div className="goods-area">
        {goodsList.map((goodsItem, index) => (
          <ShopItemCard key={index} shopItem={goodsItem} />
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {};

export default React.memo(Shop);
