import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "auto",
    paddingLeft: 0,
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
  orderInfo: {
    display: "flex",
    paddingLeft: theme.spacing(3),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    "& .title": {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
  },
  listItem: {
    "& span ": {
      fontSize: "0.9rem",
      textTransform: "capitalize",
      fontWeight: 500,
      color: "#b9b7b7",
    },
  },
  textDark: {
    color: "#b9b7b7",
  },
  price: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
