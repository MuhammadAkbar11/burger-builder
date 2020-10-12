import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

import { Container, Grid, makeStyles } from "@material-ui/core";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
    flexFlow: 1,
    overflowY: "hidden",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
      scrollbarColor: "#f5b316 #333",

      "&::-webkit-scrollbar ": {
        width: "10px",
        backgroundColor: "#333",
      },

      "&::-webkit-scrollbar-thumb  ": {
        background: "#f5b316",
        borderRadius: "2px",
      },
    },
  },
  container: {
    padding: theme.spacing(3),

    height: "100%",
  },
  item: {
    height: "100%",
    width: "100%",
    paddingLeft: theme.spacing(3),
    "&.right": {
      [theme.breakpoints.up("md")]: {
        borderLeft: "1px solid #333",
      },
    },
  },
}));

const INGREDIENT_PRICES = {
  salad: 6000,
  meat: 12000,
  cheese: 5000,
  tomato: 3000,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        meat: 0,
        tomato: 0,
        cheese: 0,
      },
      totalPrice: 7000,
      purchasabled: false,
    };
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasabled: sum > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = +INGREDIENT_PRICES[type];
    const oldPrice = +this.state.totalPrice;
    //prettier-disabled
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if (oldCount <= 0) {
      return;
    }
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = +INGREDIENT_PRICES[type];
    const oldPrice = +this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const { ingredients } = this.state;
    const { classes } = this.props;

    const disabledInfo = { ...ingredients };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Container className={classes.root}>
        <Grid container className={`${classes.container}`}>
          <Grid item md={7} lg={8} className={classes.item}>
            <Burger
              ingredients={ingredients}
              totalPrice={this.state.totalPrice}
            />
          </Grid>
          <Grid item md={5} lg={4} className={`${classes.item} right`}>
            <BuildControls
              disabled={disabledInfo}
              ingredientRemove={this.removeIngredientHandler}
              ingredientAdded={this.addIngredientHandler}
              purchase={this.state.purchasabled}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default () => {
  const classes = useStyles();
  return <BurgerBuilder classes={classes} />;
};
