import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    marginBottom: 16,
    fontSize: "7rem",
    textAlign: "center",
    "&.success": {
      color: theme.palette.success.main,
    },
    "&.error": {
      color: theme.palette.danger.main,
    },
  },
}));

export default useStyles;
