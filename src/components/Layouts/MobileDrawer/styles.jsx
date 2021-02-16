import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    width: 240,
    paddingTop: theme.spacing(2),
    backgroundColor: "#2e2e2e",
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    "&:hover": {
      color: "#333",
      backgroundColor: theme.palette.primary.main,
    },
  },
  toggle: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
