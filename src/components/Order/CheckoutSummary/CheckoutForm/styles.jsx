import { makeStyles, styled, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    color: "#f5f5f5",
  },
  formBox: {
    marginBottom: theme.spacing(5),
  },
  formGroupRow: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textField: {
    marginBottom: theme.spacing(3),
    "&.right": {
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(2),
      },
    },
  },
  formTitle: {
    color: theme.palette.light,
    marginBottom: theme.spacing(3),
  },

  creditCardRow: {
    justifyContent: "space-between",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  inputCreditNum: {
    width: 300,
    borderColor: "red",
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
      width: "100%",
    },
  },
  select: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
    // minWidth: 120,
  },
}));

const CheckoutButton = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  fontSize: 16,
  minWidth: 200,
  marginTop: "2rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",

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

export { CheckoutButton };

export default useStyles;
