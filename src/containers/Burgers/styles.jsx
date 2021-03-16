import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    overflowY: "scroll",
    height: "100%",
    "&::-webkit-scrollbar ": {
      width: "10px",
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb  ": {
      background: "transparent",
      borderRadius: "2px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
      padding: 0,
    },
  },
  item: {
    height: "100%",
    width: "100%",
    // paddingLeft: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    "&.right": {
      [theme.breakpoints.up("md")]: {
        borderLeft: "1px solid #333",
      },
    },
  },
  cart: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
