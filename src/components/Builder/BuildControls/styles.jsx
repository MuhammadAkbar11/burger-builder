import { makeStyles, styled, Button } from "@material-ui/core";

export const CheckoutButton = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  marginLeft: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  marginTop: "2rem",

  "&:hover": {
    backgroundColor: "#f5b216c9",
  },
  "&:active, &:focus": {
    backgroundColor: "#f5b216c9",
  },

  "&:disabled": {
    transform: "scale(0.9)",
    color: "f2f2f2",
    backgroundColor: "#f5b216c9",
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    overflowX: "hidden",
    marginTop: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
      paddingBottom: "4rem",
      paddingTop: theme.spacing(8),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
    },
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonCounter: {
    fontSize: "1.2rem",

    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
}));

export default useStyles;
