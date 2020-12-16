import React, { Component, Fragment } from "react";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../configs/firebase";

import Burger from "../../components/Burger/Burger";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderModal from "../../components/UI/OrderModal/OrderModal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import AlertModal from "../../components/UI/AlertModal/AlertModal";
import Spinner from "../../components/UI/Spinner/Spinner";

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
  burgerBox: {
    height: "100%",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.only("sm")]: {
      alignItems: "center",
      justifyContent: "center",
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
      purchasing: false,
      database: null,
      loading: false,
      alert: {
        isShow: false,
        title: "Success !",
        subTitle: "Order Success",
      },
    };
  }

  componentDidMount = async () => {
    await firebase.initializeApp(firebaseConfig);
    await firebase
      .database()
      .ref("orders")
      .on("value", snapshot => {
        this.setState(prevState => ({
          ...prevState,
          database: snapshot.val(),
        }));
      });
  };

  shouldComponentUpdate() {
    return true;
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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelledHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ purchasing: false, loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      costumer: {
        name: "Akbar",
        address: {
          street: "jln Antara",
          zipCode: "12345",
          city: "Bekasi",
        },
        email: "akbar@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    const orderListRef = firebase.database().ref("orders");
    orderListRef.push().set(order, err => {
      if (err) {
        console.log(err);
      } else {
        setTimeout(() => {
          this.setState({
            purchasing: false,
            loading: false,
            alert: {
              isShow: true,
              title: "succes",
              subTitle: "Order has Succesfull",
            },
          });
        }, 1500);
      }
    });
  };

  render() {
    const { ingredients } = this.state;
    const { classes } = this.props;

    const disabledInfo = { ...ingredients };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderModal
        handleCancelled={this.purchaseCancelledHandler}
        open={this.state.purchasing}
        handleContinue={this.purchaseContinueHandler}
        title="Your Order"
      >
        <OrderSummary ingredients={ingredients} price={this.state.totalPrice} />
      </OrderModal>
    );

    if (this.state.loading) {
      orderSummary = <Spinner open={true} />;
    }

    return (
      <Fragment>
        <Container className={classes.root}>
          <Grid container className={`${classes.container}`}>
            <Grid item md={7} lg={8} className={classes.item}>
              <Box className={classes.burgerBox}>
                <Burger
                  ingredients={ingredients}
                  totalPrice={this.state.totalPrice}
                />
              </Box>
            </Grid>
            <Grid item md={5} lg={4} className={`${classes.item} right`}>
              <BuildControls
                disabled={disabledInfo}
                ingredientRemove={this.removeIngredientHandler}
                ingredientAdded={this.addIngredientHandler}
                purchase={this.state.purchasabled}
                ordered={this.purchaseHandler}
              />
            </Grid>
          </Grid>
        </Container>
        {orderSummary}
        {this.state.alert.isShow && (
          <AlertModal
            show={this.state.alert.isShow}
            title={this.state.alert.title}
            subtitle={this.state.alert.subTitle}
            onClose={() =>
              this.setState({
                alert: {
                  isShow: false,
                },
              })
            }
          />
        )}
      </Fragment>
    );
  }
}

export default () => {
  const classes = useStyles();
  return <BurgerBuilder classes={classes} />;
};
