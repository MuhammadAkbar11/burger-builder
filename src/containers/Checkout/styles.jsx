import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
    flexFlow: 1,
    overflowY: "scroll",
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    paddingTop: theme.spacing(6),
    scrollbarColor: "#f5b316 #333",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: "#333",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#f5b316",
      borderRadius: "2px",
    },
  },
  title: {
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
