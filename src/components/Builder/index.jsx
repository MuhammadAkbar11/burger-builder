import React from "react";
import { Grid, Box } from "@material-ui/core";
import BuildControls from "./BuildControls";
import Burger from "../Burger";
import useStyles from "./styles";
import { Redirect } from "react-router-dom";
import { BurgerActionTypes } from "../../store/actions/types";
import { connect } from "react-redux";

const BurgerBuilderContain = props => {
  const classes = useStyles();

  const {
    ingredientId,
    ingredients,
    onAddIngredient,
    onRemoveIngredient,
  } = props;

  const updatePurchaseStatus = data => data.length > 0;

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

    const priceAddition = +props.ingredient_prices[type];
    const totalPrice = +props.totalPrice + priceAddition;

    const updatedResult = {
      ingredientId: ingredientId + 1,
      ingredients: updatedIngredients,
      totalPrice: totalPrice,
      purchasabled: isPurchase,
    };
    onAddIngredient(updatedResult);
  };

  // Remove
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

    const priceDeduction = +props.ingredient_prices[type];
    const totalPrice = +props.totalPrice - priceDeduction;

    const updatedResult = {
      ingredients: newIngredients,
      totalPrice: totalPrice,
      purchasabled: isPurchase,
    };

    onRemoveIngredient(updatedResult);
  };

  if (props.burgerName !== "") {
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

const mapStateToProps = state => {
  return {
    ingredientId: state.burger.ingredientId,
    ingredients: state.burger.ingredients,
    ingredient_prices: state.burger.ingredient_prices,
    totalPrice: state.burger.totalPrice,
    purchase: state.burger.purchasabled,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: data =>
      dispatch({
        type: BurgerActionTypes.ADD_INGREDIENT,
        payload: data,
      }),
    onRemoveIngredient: data => {
      return dispatch({
        type: BurgerActionTypes.REMOVE_INGREDIENT,
        payload: data,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilderContain);
