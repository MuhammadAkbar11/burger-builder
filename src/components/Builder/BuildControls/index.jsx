import React from "react";
import PropTypes from "prop-types";
import useStyles, { CheckoutButton } from "./styles";
import { Container, Hidden, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Controls from "./Controls";

const BuildControls = props => {
  const classes = useStyles();

  const { ingredients, controls, addingIngredient, removingIngredient } = props;

  const history = useHistory();

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
            onAdd={addingIngredient}
            onRemove={removingIngredient}
          />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Controls
            type="tabletDown"
            ingredientCtrls={controls}
            ingredients={ingredients}
            onAdd={addingIngredient}
            onRemove={removingIngredient}
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
    controls: state.burger.controls,
    purchase: state.burger.purchasabled,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
