import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  cartHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    borderBottom: "1px solid #333",
  },
  cartFooter: {
    borderTop: "1px solid #333",
  },
  cartBody: {
    height: "400px",
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar ": {
      width: "10px",
      backgroundColor: "transparent",
    },
    "&:hover": {
      "&::-webkit-scrollbar ": {
        width: "10px",
        backgroundColor: "#333",
      },
    },
    "&::-webkit-scrollbar-thumb  ": {
      background: "#f5b316",
      borderRadius: "2px",
    },
  },
}));

export default useStyles;
