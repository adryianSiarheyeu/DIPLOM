import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BusinessIcon from "@material-ui/icons/Business";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { calculateTotalPrice } from "../../utils";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  form: {
    padding: 50,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  confirmButton: {
    transition: ".5s",
    backgroundColor: "#41464c",
    "&:hover": {
      backgroundColor: "#68deb5",
      color: "#000",
    },
  },
  field: {
    fontSize: 25,
    marginBottom: 25,
  },
  summary: {
    display: "flex",
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmOrder = ({ onSubmit, itemsList }) => {
  const customerCompany = useSelector((state) => state.user.info.companyName);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    address: "",
    paymentMethod: "",
  });

  const handleFormFieldChange = useCallback(
    (field, value) => {
      const stateCopy = { ...formValues };
      stateCopy[field] = value;

      setFormValues(stateCopy);
    },
    [formValues]
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit({ ...formValues, goods: itemsList });
      handleClose();
    },
    [formValues]
  );

  return (
    <div>
      <Button
        className={classes.confirmButton}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Подтвердить заказ
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Подтверждение заказа
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form
          onSubmit={(event) => onHandleSubmit(event)}
          className={classes.form}
        >
          <TextField
            className={classes.field}
            fullWidth
            disabled
            value={customerCompany}
            id="input-with-icon-textfield"
            label="Получатель"
          />
          <TextField
            className={classes.field}
            required
            fullWidth
            autoFocus
            id="input-with-icon-textfield"
            onChange={(event) =>
              handleFormFieldChange("address", event.target.value)
            }
            label="Адрес доставки"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BusinessIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth className={classes.field}>
            <InputLabel id="demo-simple-select-label">
              Способ оплаты *
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(event) =>
                handleFormFieldChange("paymentMethod", event.target.value)
              }
            >
              <MenuItem value={"Карта"}>Карта</MenuItem>
              <MenuItem value={"Наличные"}>Наличные</MenuItem>
            </Select>
          </FormControl>

          <div className={classes.summary}>
            <b>
              Итого к оплате: {calculateTotalPrice(itemsList).toFixed(2)} BYN
            </b>
          </div>
          <Divider
            style={{ backgroundColor: "#68deb5", height: 2, marginBottom: 25 }}
          />
          <div>
            <Button
              disabled={
                Object.values(formValues).filter((value) => value === "")
                  .length > 0
              }
              style={{ margin: "0 auto", display: "block" }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Отправить заказ
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

ConfirmOrder.propTypes = {
  onSubmit: PropTypes.func,
  itemsList: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(ConfirmOrder);
