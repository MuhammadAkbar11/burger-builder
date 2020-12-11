import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import {
  Box,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: theme.spacing(3),
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar ": {
      left: "0px",
      width: "10px",
      display: "none",
      backgroundColor: "#f2f2f2",
    },

    [theme.breakpoints.down("sm")]: {
      height: "320px",
    },

    // /* Track */
    // "&::-webkit-scrollbar-track": {
    //   boxShadow: "inset 0 0 5px grey",
    //   borderRadius: "10px ",
    // },

    // "&::-webkit-scrollbar-thumb  ": {
    //   background: "red",
    //   borderRadius: "10px",
    // },
  },

  card: {
    backgroundColor: "transparent",
    margin: "auto",
    position: "relative",
    minHeight: "100%",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: " center",
  },
  cardContent: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35%",
    },

    [theme.breakpoints.only("md")]: {
      maxWidth: "40%",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "37%",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "55%",
    },
  },

  body1: {
    color: "#f5b316",
    fontSize: "1rem",
    marginTop: "5px",
    marginBottom: "5px",
    textAlign: "center",
    opacity: "0.9",
  },
  textprice: {
    fontSize: "1.2em",
    color: "#DAE1C8",
    marginTop: "auto",
    "& .price": {
      color: "#F5B316",
      marginLeft: "5px",
    },
  },
}));

const Burger = props => {
  const burgerStyles = useStyle();

  // const { ingredients } = props;

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <Typography className={burgerStyles.body1} component="h4" variant="body1">
        Please start adding ingredients!
      </Typography>
    );
  }

  return (
    <Container className={burgerStyles.root}>
      <Card className={burgerStyles.card}>
        <CardContent m="auto" className={burgerStyles.cardContent}>
          <BurgerIngredients type="bread-top" />
          {transformedIngredients}
          <BurgerIngredients type="bread-bottom" />
        </CardContent>
        <Box mt={4}>
          <Typography className={burgerStyles.textprice}>
            Current Price{" "}
            <span className={`price`}> : Rp. {props.totalPrice}</span>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default Burger;
