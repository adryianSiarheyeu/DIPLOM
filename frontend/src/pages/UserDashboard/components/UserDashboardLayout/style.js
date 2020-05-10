import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 15,
    overflow: "hidden",
    marginTop: 55,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#41464c",
  },
  customPaper: {
    padding: theme.spacing(2),
    borderBottom: "2px solid #69ddb5",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    textAlign: "center",
    color: "#41464c",
    marginBottom: 10,
  },
}));
