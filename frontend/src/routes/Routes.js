import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../config/routesNames";
import LoginContainer from "../pages/Login/containers/LoginContainer";
import PrivateRoute from "./PrivateRoute";
import MyComponent from "../pages/UserDashboard";
import UserDashboardContainer from "../pages/UserDashboard/containers/UserDashboardContainer";
import ShopContainer from "../pages/Shop/containers/ShopContainer";
import ShoppingCartContainer from "../pages/ShoppingCart/containers/ShoppingCartContainer";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={ShopContainer} />
      <Route exact path={ROUTES.LOGIN} component={LoginContainer} />
      <PrivateRoute
        exact
        path={ROUTES.PROFILE}
        component={UserDashboardContainer}
      />
      <Route exact path={ROUTES.CART} component={ShoppingCartContainer} />
    </Switch>
  );
};
