export const signValidation = (formValues, isSignUpMode) => {
  const errors = {};

  const { companyName, address, email, password, confirmPassword } = formValues;

  if (
    Object.values({ email, password }).filter((value) => value === "").length >
    0
  ) {
    errors.global = "All fields are required";
  }

  if (isSignUpMode) {
    if (Object.values(formValues).filter((value) => value === "").length > 0) {
      errors.global = "All fields are required";
    }

    if (password.trim() !== confirmPassword.trim()) {
      errors.password = "Passwords not match";
    }

    if (password.length < 6) {
      errors.password = "Password length should be 6 or more symbols";
    }
  }

  return errors;
};
