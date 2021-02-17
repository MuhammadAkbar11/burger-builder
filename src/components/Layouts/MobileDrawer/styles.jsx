import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    width: 240,
    paddingTop: theme.spacing(2),
    backgroundColor: "#2e2e2e",
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    color: theme.palette.slatelight,
    "& .MuiListItemText-root span": {
      letterSpacing: "1px",
    },
    "&:hover": {
      color: theme.palette.primary.dark,
      backgroundColor: `rgba(${theme.palette.dark}, 0.2)`,
    },
    "&.active": {
      "& .MuiListItemText-root span": {
        fontWeight: 800,
      },
      color: theme.palette.primary.main,
    },
  },
  toggle: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
