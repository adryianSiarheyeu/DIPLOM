import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import "./style.js";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import OrdersList from "../OrdersList/OrdersList";

const UserDashboardLayout = ({ userProfile }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>Личный кабинет</Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.customPaper}>Данные пользователя:</div>
          <Paper className={classes.paper}>
            <UserInfoCard userProfile={userProfile} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={classes.customPaper}>Ваши заказы:</div>
          <OrdersList />
          {/*</Paper>*/}
        </Grid>
      </Grid>
    </div>
  );
};

UserDashboardLayout.propTypes = {};

export default React.memo(UserDashboardLayout);
