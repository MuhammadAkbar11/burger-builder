import React from "react";
import { Grid, Box } from "@material-ui/core";
import BuildControls from "./BuildControls";
import Burger from "../Burger";
import useStyles from "./styles";
import { Redirect } from "react-router-dom";
import {
  _onAddingIngredient,
  _onRemovingIngredient,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const BurgerBuilderContain = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const ingredients = useSelector(state => state.burger.ingredients);
  const ingredientPrices = useSelector(state => state.burger.ingredient_prices);
  const totalPrice = useSelector(state => state.burger.totalPrice);
  const ingredientId = useSelector(state => state.burger.ingredientId);
  const burgerName = useSelector(state => state.burger.name);

  const updatePurchaseStatus = data => data.length > 0;

  //# Adding Ingredient
  const addIngredientHandler = type => {
    const oldIngredients = [...ingredients];
    const updatedIngredients = [
      {
        id: ingredientId,
        ingredient: type,
      },
      ...oldIngredients,
    ];
    const isPurchase = updatePurchaseStatus(updatedIngredients);

    const priceAddition = +ingredientPrices[type];
    const newTotalPrice = +totalPrice + priceAddition;

    const updatedResult = {
      ingredientId: ingredientId + 1,
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice,
      purchasabled: isPurchase,
    };
    dispatch(_onAddingIngredient(updatedResult));
  };

  const removeIngredientHandler = type => {
    const selectedIgredient = ingredients.filter(item => {
      return item.ingredient === type;
    });
    selectedIgredient.shift(); // menghapus element pertama setelah di filter
    const notSelected = ingredients.filter(item => item.ingredient !== type); // element yg tidak terhapus dgn type yg berbeda

    const newIngredients = [...selectedIgredient, ...notSelected];
    newIngredients
      .sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)))
      .reverse();

    const isPurchase = updatePurchaseStatus(newIngredients);

    const priceDeduction = +ingredientPrices[type];
    const newTotalPrice = +totalPrice - priceDeduction;

    const updatedResult = {
      ingredients: newIngredients,
      totalPrice: newTotalPrice,
      purchasabled: isPurchase,
    };

    dispatch(_onRemovingIngredient(updatedResult));
  };

  if (burgerName !== "") {
    return (
      <Grid container className={`${classes.root}`}>
        <Grid item md={7} lg={8} className={classes.item}>
          <Box className={`${classes.burgerBox}`}>
            <Burger removingIngredient={removeIngredientHandler} />
          </Box>
        </Grid>
        <Grid item md={5} lg={4} className={`${classes.item} right`}>
          <BuildControls
            addingIngredient={addIngredientHandler}
            removingIngredient={removeIngredientHandler}
          />
        </Grid>
      </Grid>
    );
  }

  return <Redirect to="/builder/start" />;
};

export default BurgerBuilderContain;
