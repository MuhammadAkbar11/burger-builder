import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(2),
    position: "relative",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: theme.palette.slate,
    border: "2px solid #61dafb00",
    "&:hover": {
      color: theme.palette.light,
      border: "2px solid " + theme.palette.slate,
    },
    "&.active": {
      color: theme.palette.light,
      border: "2px solid " + theme.palette.primary.main,
      boxShadow: "0 0 0.2rem " + theme.palette.primary.main,
    },
  },
  labelSelected: {
    backgroundColor: "#212121",
    border: "2px solid " + theme.palette.primary.main,
    position: "absolute",
    height: 24,
    borderRadius: "50%",
    top: -10,
    right: -10,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
