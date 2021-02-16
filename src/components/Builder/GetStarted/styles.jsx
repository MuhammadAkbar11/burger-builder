import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.light,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: theme.spacing(3),
    "& input": {
      textAlign: "center",
      fontSize: "1.4rem",
      letterSpacing: "3px",
      textTransform: "uppercase",
    },
    "& input:focus": {
      textAlign: "center",
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  button: {
    textTransform: "capitalize",
    marginTop: theme.spacing(3),
    fontSize: "1rem",
  },

  loader: {
    animation: `$loader 1s linear infinite`,
    animationDirection: "reverse",
    color: theme.palette.primary.main,
    width: "auto",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@keyframes loader": {
    form: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default useStyles;
