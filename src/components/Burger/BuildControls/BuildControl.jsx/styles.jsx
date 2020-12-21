import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      lineHeight: "2rem",
    },
  },

  labelContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: theme.spacing(2),
  },
  label: {
    textAlign: "left",
    marginTop: "9px",
    marginLeft: ".1rem",
    color: "#f5f5f5",
    fontSize: "0.9rem",
  },
  labelPrice: {
    marginLeft: "5px",
    fontSize: "0.85rem",
    color: "#8C8C8C",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },
  ml4: {
    marginLeft: "4px",
  },
  buttonAdd: {
    marginLeft: theme.spacing(2),
  },
  img: {
    width: 38,

    [theme.breakpoints.down("sm")]: {
      width: 55,
    },
  },
  button: {
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
      color: "#f5b216c9",
      border: "1px solid #f5b216c9",
    },
  },
}));

export default useStyles;
