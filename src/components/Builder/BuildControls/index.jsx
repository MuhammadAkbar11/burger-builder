import React from "react";
import PropTypes from "prop-types";
import useStyles, { CheckoutButton } from "./styles";

import { Container, Hidden, Paper } from "@material-ui/core";
import { BurgerActionTypes } from "../../../store/actions/types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Controls from "./Controls";

const BuildControls = props => {
  const classes = useStyles();

  const {
    ingredientId,
    ingredients,
    controls,
    onAddIngredient,
    onRemoveIngredient,
  } = props;

  const history = useHistory();

  let disabledInfo = controls
    .map(ctl => ctl.type)
    .reduce((ac, a) => {
      const exits = ingredients.filter(item => item.ingredient === a);

      let data = {
        ...ac,
        [a]: {
          disabled: exits.length <= 0,
          total: exits.length,
        },
      };
      return data;
    }, {});

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

  const goBuilderSummary = e => {
    e.preventDefault();
    history.push("/builder/summary");
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Hidden smDown implementation="css">
          <Controls
            type="tabletUp"
            ingredientCtrls={controls}
            ingredients={ingredients}
            onAdd={addIngredientHandler}
            onRemove={removeIngredientHandler}
          />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Controls
            type="tabletDown"
            ingredientCtrls={controls}
            ingredients={ingredients}
            onAdd={addIngredientHandler}
            onRemove={removeIngredientHandler}
          />
        </Hidden>
        <CheckoutButton
          onClick={goBuilderSummary}
          size="large"
          variant="contained"
          disabled={!props.purchase ? true : false}
        >
          Add to Cart
        </CheckoutButton>
      </Paper>
    </Container>
  );
};

BuildControls.propTypes = {
  ingredients: PropTypes.array,
  ingredientAdded: PropTypes.func,
  ingredientRemove: PropTypes.func,
  purchase: PropTypes.bool,
  ordered: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    ingredientId: state.burger.ingredientId,
    ingredients: state.burger.ingredients,
    ingredient_prices: state.burger.ingredient_prices,
    totalPrice: state.burger.totalPrice,
    controls: state.burger.controls,
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
