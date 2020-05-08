import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import UserDashboard from "../components/UserDashboard";
import { getUserProfileStart } from "../actions";
import Spinner from "../../../components/Spinner/Spinner";

const UserDashboardContainer = (props) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.info);
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(getUserProfileStart());
  }, []);

  return isLoading ? <Spinner /> : <UserDashboard userProfile={userProfile} />;
};

UserDashboardContainer.propTypes = {};

export default UserDashboardContainer;
