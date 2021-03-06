import { makeStyles } from "@material-ui/core/styles";
import pipesIcon from "../../../static/building.svg";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#41474d",
    "&:hover": {
      backgroundColor: "#000",
      transition: "0.3s",
    },
  },
  icon: {
    backgroundImage: `url('${pipesIcon}')`,
    backgroundSize: "contain",
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  signModeToggler: {
    color: "#000",
  },
}));
