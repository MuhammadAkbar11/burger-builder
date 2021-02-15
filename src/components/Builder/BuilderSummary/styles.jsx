import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
    paddingTop: theme.spacing(6),
    overflowY: "scroll",
    scrollbarColor: "#f5b316 #333",
    width: "100%",
    height: "100%",
    "&::-webkit-scrollbar ": {
      width: "10px",
      backgroundColor: "#333",
    },

    "&::-webkit-scrollbar-thumb  ": {
      background: "#f5b316",
      borderRadius: "2px",
    },
  },
  titleSection: {
    color: theme.palette.slate,
    marginBottom: theme.spacing(3),
  },
  gridContainer: {
    paddingTop: theme.spacing(3),
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
      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(3),
        borderLeft: "1px solid #333",
      },
    },
  },

  finalIngredients: {
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "380px",
    },
  },

  cardDetails: {
    paddingRight: theme.spacing(1),
    width: "100%",
    background: "none",
    margin: "auto",
    "& .caption": {
      color: theme.palette.light,
    },
    "& .contents": {
      marginTop: theme.spacing(3),
    },
  },
  ingredients: {
    color: theme.palette.slatelight,
  },
  ingredient: {
    textTransform: "capitalize",
  },
  quantity: {
    color: theme.palette.slate,
  },
  totalPrice: {
    color: theme.palette.primary.main,
  },
  counter: {
    fontSize: "1.5rem",
  },
  cardValue: {
    display: "flex",
    justifyContent: "flex-end",
  },
  flexBetween: {
    justifyContent: "space-between",
  },
  flex: {
    color: theme.palette.light,
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexItem: {
    flex: 1,
  },
  burgerDetails: {},
  textDark: {
    color: "#b9b7b7",
  },
  price: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  cancelLink: {
    textDecoration: "none",
    fontSize: "1rem",
    color: theme.palette.slate,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
