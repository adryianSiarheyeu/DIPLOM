import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ShopItemCard = ({ shopItem }) => {
  const { name, type, size, series, price, image } = shopItem;
  const classes = useStyles();

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
            {/*Тип: {type}*/}
            <p>{size ? `Размер: ${size}` : `Серия: ${series}`}</p>
            <p>Цена: {price} BYN</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => console.log(shopItem)}
        >
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
};

ShopItemCard.propTypes = {
  shopItem: PropTypes.object,
};

export default ShopItemCard;
