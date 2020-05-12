import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import { clearSuccessState } from "../../pages/ShoppingCart/actions";

const EmptyStatePage = ({
  imageUrl,
  imageSize,
  text,
  routToGo,
  buttonText,
  isAtDash,
  withDispatch,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToHandler = useCallback(() => {
    if (withDispatch) {
      dispatch(clearSuccessState());
    }
    history.push(routToGo);
  }, []);

  return (
    <div className="empty-state-page-container">
      <div
        className="empty-state_image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="empty-state_text">{text}</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => goToHandler()}
        style={{ fontSize: 20, backgroundColor: isAtDash ? "#41464c" : "" }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

EmptyStatePage.propTypes = {
  imageUrl: PropTypes.string,
  // imageSize: PropTypes.string.oneOfType(["mid, large"]),
  text: PropTypes.string,
  routToGo: PropTypes.string,
  buttonText: PropTypes.string,
};

export default React.memo(EmptyStatePage);
