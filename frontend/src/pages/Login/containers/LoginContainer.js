import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Login from "../components/Login";
import { signInStart, signUpStart } from "../actions";

const LoginContainer = ({}) => {
  const dispatch = useDispatch();

  const onHandleSign = useCallback((body, isSignUpMode) => {
    const { address, email, companyName, password } = body;
    isSignUpMode
      ? dispatch(signUpStart({ address, email, companyName, password }))
      : dispatch(signInStart({ email, password }));
  }, []);

  return <Login onHandleSign={onHandleSign} />;
};

LoginContainer.propTypes = {};

export default LoginContainer;
