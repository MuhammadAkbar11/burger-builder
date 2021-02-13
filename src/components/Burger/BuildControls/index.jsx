import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

import { Box, Button, Container, Paper, styled } from "@material-ui/core";

import BuildControl from "./BuildControl.jsx";
import { BurgerActionTypes } from "../../../store/actions/types";
import { connect } from "react-redux";

const CheckoutButton = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  marginLeft: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  marginTop: "2rem",

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

const BuildControls = props => {
  const classes = useStyles();
  const {
    ingredientId,
    ingredients,
    controls,
    onAddIngredient,
    onRemoveIngredient,
  } = props;

  console.log(props);

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

  const addIngredientHandler = type => {
    const oldIngredients = [...ingredients];
    const updatedIngredients = [
      {
        id: ingredientId,
        ingredient: type,
      },
      ...oldIngredients,
    ];
    const isPurchase = updatedIngredients.length > 0;

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
    onRemoveIngredient(type);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.controls}>
          {controls.map((item, index) => {
            return (
              <div key={`${item.label}${index + 1}`}>
                <BuildControl
                  added={() => addIngredientHandler(item.type)}
                  remove={() => removeIngredientHandler(item.type)}
                  icon={item.img}
                  label={item.label}
                  type={item.type}
                  price={item.price}
                  disabled={disabledInfo[item.type].disabled}
                  total={disabledInfo[item.type].total}
                />
              </div>
            );
          })}
        </Box>
        <CheckoutButton
          size="large"
          variant="contained"
          disabled={!props.purchase ? true : false}
        >
          Order now!
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
    onRemoveIngredient: () => {
      return dispatch({ type: BurgerActionTypes.REMOVE_INGREDIENT });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
