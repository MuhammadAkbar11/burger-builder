import React from "react";
import PropTypes from "prop-types";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import { Box, Card, Container, makeStyles } from "@material-ui/core";

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
}));

const Burger = props => {
  const burgerStyles = useStyle();

  return (
    <Container className={burgerStyles.root}>
      <Card className={burgerStyles.card}>
        <Box mx="auto" className={burgerStyles.box}>
          <BurgerIngredients type="bread-top" />
          <BurgerIngredients type="salad" />
          <BurgerIngredients type="meat" />
          <BurgerIngredients type="tomato" />
          <BurgerIngredients type="cheese" />
          <BurgerIngredients type="meat" />
          <BurgerIngredients type="salad" />
          <BurgerIngredients type="bread-bottom" />
        </Box>
      </Card>
    </Container>
  );
};

Burger.propTypes = {};

export default Burger;
