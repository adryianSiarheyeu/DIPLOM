import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles/styles";
import Container from "@material-ui/core/Container";
import { signValidation } from "../utils";
import { isEmpty } from "lodash";

import RegistrationStatus from "./RegistrationStatus";
import Snack from "../../../components/Snackbar/Snackbar";

const Login = ({
  onHandleSign,
  isLoading,
  isAccountCreated,
  registerResponseMessage,
  error,
}) => {
  const initialEmptyState = {
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    companyName: "",
  };

  const classes = useStyles();
  const [isSignUpMode, setSignMode] = useState(false);
  const [isStatusScreenOpen, setStatusScreenOpen] = useState(false);
  const [formValues, setFieldValue] = useState(initialEmptyState);

  const changeFormField = useCallback(
    (formFieldName, value) => {
      const newState = { ...formValues };
      newState[formFieldName] = value;

      setFieldValue(newState);
    },
    [formValues]
  );

  const changeSingMode = useCallback(() => {
    setSignMode(!isSignUpMode);
    setFieldValue(initialEmptyState);
  }, [isSignUpMode]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onHandleSign(formValues, isSignUpMode);
      if (isSignUpMode) {
        setStatusScreenOpen(true);
      }
    },
    [formValues]
  );

  const goToLoginHandler = useCallback(() => {
    if (isAccountCreated) {
      setStatusScreenOpen(false);
      setSignMode(false);
    } else {
      setStatusScreenOpen(false);
    }
    setFieldValue(initialEmptyState);
  }, [isAccountCreated]);

  return (
    <Container component="main" maxWidth="xs">
      {!isStatusScreenOpen && !isLoading ? (
        <div className={classes.paper}>
          <div className={classes.icon} />
          <Typography component="h1" variant="h5">
            {isSignUpMode ? `Sign up` : `Sign in`}
          </Typography>
          <form className={classes.form} onSubmit={(event) => onSubmit(event)}>
            {isSignUpMode && (
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Company Name"
                  value={formValues.companyName}
                  onChange={(event) =>
                    changeFormField("companyName", event.target.value)
                  }
                  name="name"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  value={formValues.address}
                  onChange={(event) =>
                    changeFormField("address", event.target.value)
                  }
                  type="text"
                  name="name"
                />
              </>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              value={formValues.email}
              onChange={(event) => changeFormField("email", event.target.value)}
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={formValues.password}
              onChange={(event) =>
                changeFormField("password", event.target.value)
              }
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isSignUpMode && (
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirm"
                label="Confirm password"
                value={formValues.confirmPassword}
                onChange={(event) =>
                  changeFormField("confirmPassword", event.target.value)
                }
                type="password"
                id="confirm"
                autoComplete="current-password"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isEmpty(signValidation(formValues, isSignUpMode))}
              color="primary"
              className={classes.submit}
            >
              {isSignUpMode ? `Sign Up` : `Sign In`}
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link
                  variant="body2"
                  onClick={() => changeSingMode()}
                  className={classes.signModeToggler}
                  style={{ cursor: "pointer" }}
                >
                  {isSignUpMode
                    ? "Back to Sign In"
                    : `Don't have an account? Sign Up`}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      ) : (
        <RegistrationStatus
          isAccountCreated={isAccountCreated}
          message={registerResponseMessage}
          isLoading={isLoading}
          returnBackTo={goToLoginHandler}
        />
      )}
      <Snack error={error} />
    </Container>
  );
};

Login.propTypes = {
  onHandleSign: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default React.memo(Login);
