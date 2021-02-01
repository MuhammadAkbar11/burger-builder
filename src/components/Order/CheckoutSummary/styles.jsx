import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    padding: theme.spacing(3),
    height: "100%",
    color: theme.palette.light,
  },
  gridItem: {
    height: "auto",
    width: "100%",
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(0),

    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(4),
    },
    "&.right": {
      paddingLeft: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        borderLeft: "1px solid #333",
      },
    },
  },
  caption: {
    color: theme.palette.primary.dark,
  },
}));

export default useStyles;
