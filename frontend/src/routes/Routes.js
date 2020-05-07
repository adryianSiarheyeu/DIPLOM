import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../config/routesNames";
import LoginContainer from "../pages/Login/containers/LoginContainer";
import { checkToken } from "../actions/globalActions";
import PrivateRoute from "./PrivateRoute";
import MyComponent from "../pages/UserDashboard";

export const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginContainer} />
      <PrivateRoute component={MyComponent} path={ROUTES.PROFILE} exact />
    </Switch>
  );
};