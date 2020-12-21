const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
    flexFlow: 1,
    overflowY: "hidden",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
      scrollbarColor: "#f5b316 #333",

      "&::-webkit-scrollbar ": {
        width: "10px",
        backgroundColor: "#333",
      },

      "&::-webkit-scrollbar-thumb  ": {
        background: "#f5b316",
        borderRadius: "2px",
      },
    },
  },
  container: {
    padding: theme.spacing(3),

    height: "100%",
  },
  item: {
    height: "100%",
    width: "100%",
    paddingLeft: theme.spacing(3),
    "&.right": {
      [theme.breakpoints.up("md")]: {
        borderLeft: "1px solid #333",
      },
    },
  },
  burgerBox: {
    height: "100%",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.only("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default useStyles;
