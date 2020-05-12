import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { calculateTotalPrice } from "../../utils";
import Button from "@material-ui/core/Button";
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { materials } from "../../../Shop/config";
import EmptyStatePage from "../../../../components/EmptyStatePage/EmptyStatePage";
import EmptyCart from "../../../../static/shopping.svg";
import SuccessSent from "../../../../static/cardboard.svg";
import Spinner from "../../../../components/Spinner/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    marginTop: 55,
    padding: "20px 50px",
    margin: "0 auto",
    overflowY: "auto",
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: "#41464c",
    padding: 16,
  },
  goodIcon: {
    height: 35,
    width: 35,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  textLength: {
    maxWidth: 350,
    width: "100%",
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  listItem: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  summary: {
    display: "flex",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const ShoppingCart = ({
  itemsList,
  handleRemoveFromCart,
  onHandleItemChange,
  onHandleSubmit,
}) => {
  const classes = useStyles();
  const { isLoading, success } = useSelector((state) => state.shoppingCart);

  return (
    <div className={classes.demo}>
      <Paper className={classes.title}>Корзина</Paper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {itemsList.length > 0 ? (
            <>
              <List style={{ maxWidth: 1750 }}>
                {itemsList.map((item, index, array) => {
                  return (
                    <React.Fragment key={index}>
                      <ListItem className={classes.listItem}>
                        <div
                          className={classes.textLength}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <ListItemAvatar>
                            <div
                              className={classes.goodIcon}
                              style={{ backgroundImage: `url(${item.image})` }}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${item.name}`}
                            secondary={item.size || item.series}
                          />
                        </div>

                        <TextField
                          label="Количество"
                          id="filled-margin-none"
                          type="number"
                          value={item.quantity}
                          onChange={(event) =>
                            onHandleItemChange({
                              id: item.id,
                              value:
                                event.target.value > 1 ? event.target.value : 1,
                              fieldToEdit: "quantity",
                            })
                          }
                        />
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Материал
                          </InputLabel>
                          <Select
                            defaultValue={item.material}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(event) =>
                              onHandleItemChange({
                                id: item.id,
                                value: event.target.value,
                                fieldToEdit: "material",
                              })
                            }
                          >
                            {materials.map((material, index) => (
                              <MenuItem key={index} value={material}>
                                {material}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <div
                          style={{
                            marginRight: 25,
                            maxWidth: 150,
                            width: "100%",
                          }}
                        >
                          <ListItemText primary={`Цена: ${item.price} BYN`} />
                        </div>
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      {index !== array.length - 1 && <Divider />}
                    </React.Fragment>
                  );
                })}
              </List>
              <Divider
                style={{ backgroundColor: "#68deb5", marginTop: 25, height: 2 }}
              />
              <div className={classes.summary}>
                <ConfirmOrder onSubmit={onHandleSubmit} itemsList={itemsList} />
                <b> Итого: {calculateTotalPrice(itemsList).toFixed(2)} BYN</b>
              </div>
            </>
          ) : success ? (
            <EmptyStatePage
              buttonText={"Перейти в личный кабинет"}
              imageUrl={SuccessSent}
              text={"Заказ успешно отправлен!"}
              routToGo={"/profile"}
              withDispatch
            />
          ) : (
            <EmptyStatePage
              buttonText={"Отправиться в магазин"}
              imageUrl={EmptyCart}
              text={"Ваша корзина пуста"}
              routToGo={"/"}
            />
          )}
        </>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.object),
  handleRemoveFromCart: PropTypes.func,
  onHandleItemChange: PropTypes.func,
  onHandleSubmit: PropTypes.func,
};

export default React.memo(ShoppingCart);
