import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { checkToken } from "../../actions/globalActions";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkToken());
  }, [isAuth]);

  return (
    <div className="main-container" style={{ overflow: "hidden" }}>
      <Header />
      {children}
    </div>
  );
};

MainLayout.propTypes = {};

export default React.memo(MainLayout);
