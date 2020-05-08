import React from "react";
import PropTypes from "prop-types";

const UserDashboard = ({ userProfile }) => {
  const { email, companyName, address } = userProfile;
  return (
    <div>
      {}
      <div>EMAIL: {email}</div>
      <div>COMPANY: {companyName}</div>
      <div>ADDRESS: {address}</div>
    </div>
  );
};

UserDashboard.propTypes = {};

export default React.memo(UserDashboard);
