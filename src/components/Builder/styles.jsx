import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),

    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
      padding: 0,
    },
  },
  item: {
    height: "100%",
    width: "100%",
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    "&.right": {
      [theme.breakpoints.up("md")]: {
        borderLeft: "1px solid #333",
      },
    },
  },
  burgerBox: {
    height: "100%",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.only("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default useStyles;
