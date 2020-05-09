import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../config/routesNames";

import Login from "../components/Login";
import { signInStart, signUpStart } from "../actions";

const LoginContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isAccountCreated,
    registerResponseMessage,
    isLoading,
    isAuth,
    error,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) {
      history.push(ROUTES.HOME);
    }
  }, [isAuth]);

  const onHandleSign = useCallback((body, isSignUpMode) => {
    const { address, email, companyName, password } = body;
    isSignUpMode
      ? dispatch(signUpStart({ address, email, companyName, password }))
      : dispatch(signInStart({ email, password }));
  }, []);

  return (
    <Login
      onHandleSign={onHandleSign}
      isLoading={isLoading}
      isAccountCreated={isAccountCreated}
      registerResponseMessage={registerResponseMessage}
      error={error}
    />
  );
};

LoginContainer.propTypes = {};

export default LoginContainer;
