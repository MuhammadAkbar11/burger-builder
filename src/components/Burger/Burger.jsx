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
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    minHeight: "70vh",
    width: "100%",
  },

  card: {
    padding: theme.spacing(5),
    margin: "auto",
    [theme.breakpoints.up("lg")]: {
      maxWidth: 500,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: 500,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
    },
  },
  box: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50%",
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
        <Box mx="auto" className={burgerStyles.box}>
          <BurgerIngredients type="bread-top" />
          {transformIngredients}
          <BurgerIngredients type="bread-bottom" />
        </Box>
      </Card>
    </Container>
  );
};

export default Burger;
