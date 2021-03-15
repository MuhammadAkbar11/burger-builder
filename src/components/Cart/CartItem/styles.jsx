import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid #333",
  },
  buttonCounter: {
    padding: theme.spacing(1),
    height: 30,
    width: 30,
    maxWidth: 30,
    minWidth: 30,
    borderRadius: 0,
    margin: 0,
  },
  quantity: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    height: 30,
    width: 30,
    maxWidth: 30,
    minWidth: 30,
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  title: {
    color: theme.palette.slatelight,
    marginBottom: theme.spacing(1),
  },
  price: {
    color: theme.palette.primary.main,
  },
  btnRemove: {
    color: theme.palette.danger.main,
  },
}));

export default useStyles;
