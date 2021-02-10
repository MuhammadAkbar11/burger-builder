import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  cardOrderDetail: {
    backgroundColor: "transparent",
  },
  cardOrderDetailHeader: {
    backgroundColor: "transparent",
  },
  textSlateLight: {
    color: theme.palette.slatelight,
  },
  cardContentTitle: {
    fontWeight: "600",
  },
  flex: {
    color: theme.palette.light,
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexItem: {
    flex: 1,
  },
  counter: {
    display: "flex",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  ingredients: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    minWidth: 40,
  },
  inputCounter: {
    width: 40,
    textAlign: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
