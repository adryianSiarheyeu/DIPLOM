import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

import { useStyles } from "./style";

const UserInfoCard = ({ userProfile }) => {
  const classes = useStyles();
  const { companyName, address, email } = userProfile;

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.circle}>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="Компания" secondary={companyName} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.circle}>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Адрес" secondary={address} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.circle}>
            <AlternateEmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Электронная почта" secondary={email} />
      </ListItem>
    </List>
  );
};

UserInfoCard.propTypes = {
  userProfile: PropTypes.object,
};

export default React.memo(UserInfoCard);
