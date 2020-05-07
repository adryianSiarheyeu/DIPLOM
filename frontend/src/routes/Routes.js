import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../config/routesNames";
import LoginContainer from "../pages/Login/containers/LoginContainer";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginContainer} />
      {/*<Route exact path={ROUTES.PROFILE} component={LoginContainer} />*/}
    </Switch>
  );
};
