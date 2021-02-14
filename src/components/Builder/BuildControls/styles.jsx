import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "4rem",
      paddingTop: theme.spacing(14),
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: "4rem",
      paddingTop: theme.spacing(4),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",

    [theme.breakpoints.only("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "4rem",
    },
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
}));

export default useStyles;
