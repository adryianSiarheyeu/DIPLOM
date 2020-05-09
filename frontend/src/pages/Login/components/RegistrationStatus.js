import React from "react";
import PropTypes from "prop-types";
import "../styles/registrationStatus.scss";
import successIcon from "../../../static/interface.svg";
import failIcon from "../../../static/computer.svg";
import Spinner from "../../../components/Spinner/Spinner";

const RegistrationStatus = ({
  message,
  isAccountCreated,
  isLoading,
  returnBackTo,
}) => {
  return (
    <div className="status-container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            className="status-icon"
            style={{
              backgroundImage: `url(${
                isAccountCreated ? successIcon : failIcon
              })`,
            }}
          />
          <div className="status-text">{message}</div>
          <button className="button" onClick={returnBackTo}>
            {isAccountCreated
              ? "Перейти на страницу авторизации..."
              : "Попробовать снова!"}
          </button>
        </>
      )}
    </div>
  );
};

RegistrationStatus.propTypes = {
  message: PropTypes.string.isRequired,
  isAccountCreated: PropTypes.bool.isRequired,
};

export default RegistrationStatus;
