import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Login from "../components/Login";
import { signInStart, signUpStart } from "../actions";

const LoginContainer = ({}) => {
  const { isAccountCreated, registerResponseMessage, isLoading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

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
    />
  );
};

LoginContainer.propTypes = {};

export default LoginContainer;
