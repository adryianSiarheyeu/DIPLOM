import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ShopItemCard = ({
  shopItem,
  handleAddToCart,
  handleRemoveFromCart,
  isAlreadyAdded,
}) => {
  const { name, type, size, series, price, image } = shopItem;
  const classes = useStyles();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>{size ? `Размер: ${size}` : `Серия: ${series}`}</p>
            <p>Цена: {price} BYN</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isAlreadyAdded ? (
          <>
            <Button
              size="small"
              color="primary"
              style={{ color: "red" }}
              onClick={() => handleRemoveFromCart(shopItem.id)}
            >
              Убрать из корзины
            </Button>
            <Button
              size="small"
              color="primary"
              // style={{ color: "red" }}
              onClick={() => history.push("/cart")}
            >
              Перейти к корзине
            </Button>
          </>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={
              isAuth
                ? () => handleAddToCart(shopItem)
                : () => history.push("/login")
            }
          >
            Добавить в корзину
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

ShopItemCard.propTypes = {
  shopItem: PropTypes.object,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  isAlreadyAdded: PropTypes.bool,
};

export default React.memo(ShopItemCard);
