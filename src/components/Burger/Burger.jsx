import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import {
  Box,
  Card,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    position: "relative",

    width: "100%",
    height: "100%",
    padding: theme.spacing(3),
    overflowY: "scroll",
    "&::-webkit-scrollbar ": {
      left: "0px",
      width: "10px",
      display: "none",
      backgroundColor: "#f2f2f2",
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
    padding: theme.spacing(5),
    margin: "auto",
    position: "relative",
    height: "100%",
    // boxShadow: "0 0 0.3rem #333",
  },
  box: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35%",
    },

    [theme.breakpoints.only("md")]: {
      maxWidth: "55%",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "45%",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "50%",
    },
  },

  body1: {
    fontSize: "1rem",
    marginTop: "5px",
    marginBottom: "5px",
    textAlign: "center",
  },
}));

const Burger = props => {
  const burgerStyles = useStyle();

  const { ingredients } = props;
  console.log(ingredients);
  let transformIngredients = Object.keys(ingredients).map(igKey => {
    return [...Array(ingredients[igKey])]
      .map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
  });

  if (transformIngredients.length === 0) {
    transformIngredients = (
      <Typography
        color="error"
        className={burgerStyles.body1}
        component="h4"
        variant="body1"
      >
        Please start adding ingredients!
      </Typography>
    );
  }

  return (
    <Container className={burgerStyles.root}>
      <Card className={burgerStyles.card}>
        <Box m="auto" className={burgerStyles.box}>
          <BurgerIngredients type="bread-top" />
          {transformIngredients}
          <BurgerIngredients type="bread-bottom" />
        </Box>
      </Card>
    </Container>
  );
};

export default Burger;
