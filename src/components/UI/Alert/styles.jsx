import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    backgroundColor: theme.palette.dark,
    borderRadius: "none",
    "& > *": {
      textAlign: "center",
      color: theme.palette.light,
    },
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },

  title: {
    fontWeight: "bold",
  },
}));

export default useStyles;
