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
    alignItems: "center",
    flex: 1,
  },
  ml4: {
    marginLeft: "4px",
  },
  img: {
    width: 38,

    [theme.breakpoints.down("sm")]: {
      width: 55,
    },
  },
  badgeTotal: {
    color: "#8C8C8C",
    fontSize: ".8rem",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    "&:disabled": {
      color: "f2f2f2",
      backgroundColor: "#f5b216c9",
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
}));

export default useStyles;
