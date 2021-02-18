import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  btnCounters: {
    fontSize: "1.2rem",
    "&:disabled": {
      color: "f2f2f2",
      backgroundColor: "#f5b216c9",
      opacity: 0.6,
      cursor: "not-allowed",
    },
    [theme.breakpoints.down("xs")]: {
      width: 50,
      fontSize: "0.5rem",
    },
  },
  ingredientBoxLabel: {
    color: theme.palette.slate,
    "& .price": {
      textTransform: "uppercase",
      fontWeight: 700,
      color: theme.palette.slatelight,
      marginRight: theme.spacing(1),
    },
    "& > *": {
      fontSize: "1rem",
    },
  },
  cardAlert: {
    backgroundColor: "transparent",
    borderColor: theme.palette.primary.dark,
    width: "100%",
  },
  paperActions: {
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    cursor: "pointer",
    height: 90,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.slate,
    transition: "0.2s ease-in-out",
    "&:hover, &.active": {
      // backgroundColor: theme.palette.primary.dark,

      transform: "scale(0.95) translateY(3px)",
      "& > *": {
        color: theme.palette.light,
      },
    },
  },
  paperActionsLabel: {
    color: "current",
  },
  cardIngredient: {
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cardIngredientContent: {
    border: "1px solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingBottom: 0,
    height: "100%",
    ".text": {
      marginTop: "auto",
    },
  },
  ctrlAction: {},
  gridContainer: {
    paddingTop: theme.spacing(5),
    paddingLeft: "7%",
  },
  gridItem: {
    height: "auto",
  },
}));

export default useStyles;
