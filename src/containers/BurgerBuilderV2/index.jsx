import React, { Fragment } from "react";

import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../configs/firebase";

import useStyles from "./styles";
import { Container, Grid, Box } from "@material-ui/core";
import BuildControls from "../../components/Burger/BuildControls";
import Burger from "../../components/Burger";
import OrderModal from "../../components/UI/OrderModal/OrderModal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import Alert from "../../components/UI/Alert";

const INGREDIENT_PRICES = {
  salad: 6000,
  meat: 12000,
  cheese: 5000,
  tomato: 3000,
};

const BurgerBuilder2 = () => {
  const classes = useStyles();

  const [ingredientId, setIngredientId] = React.useState(1);
  const [ingredients, setIngredients] = React.useState([]);

  const [totalPrice, setTotalPrice] = React.useState(7000);
  const [purchasabled, setPurchasabled] = React.useState(false);
  const [purchasing, setPurchasing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    show: false,
    title: "Success",
    subTitle: "Your order was successful",
  });

  React.useEffect(() => {
    firebase.initializeApp(firebaseConfig);
    return;
  }, []);

  const updatePurchaseState = data => {
    setPurchasabled(data.length > 0);
  };

  const addIngredientHandler = type => {
    setIngredientId(prevState => prevState + 1);

    const oldIgredients = [...ingredients];
    const updatedIngredients = [
      {
        id: ingredientId,
        ingredient: type,
      },
      ...oldIgredients,
    ];

    setIngredients(updatedIngredients);

    const priceAddition = +INGREDIENT_PRICES[type];
    setTotalPrice(prevPrice => +prevPrice + priceAddition);
    updatePurchaseState(updatedIngredients);
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
    setIngredients(newIngredients);
    updatePurchaseState(newIngredients);
  };

  const purchaseContinueHandler = async () => {
    setPurchasing(false);
    setLoading(true);

    const order = {
      ingredients: ingredients,
      price: totalPrice,
      costumer: {
        userId: 1,
        name: "Akbar",
        email: "akbar@gmail.com",
        address: {
          street: "jln Antara",
          zipCode: "12345",
          city: "Bekasi",
        },
      },
      deliveryMethod: "fastest",
    };

    const orderListRef = await firebase.database().ref("orders");
    orderListRef.push().set(order, err => {
      if (err) {
        console.log(err);
      } else {
        setTimeout(() => {
          setPurchasing(false);
          setLoading(false);
          setAlert(prevState => {
            return {
              show: true,
              title: prevState.title,
              subTitle: prevState.subTitle,
            };
          });
          setIngredients([]);
          setTotalPrice(7000);
        }, 1500);
      }
    });
  };

  let orderSummary = (
    <OrderModal
      open={purchasing}
      title="Your Order"
      handleCancelled={() => setPurchasing(false)}
      handleContinue={purchaseContinueHandler}
    >
      <OrderSummary ingredients={ingredients} totalPrice={totalPrice} />
    </OrderModal>
  );

  if (loading) {
    orderSummary = <Spinner open={true} />;
  }

  let containAlert;
  if (alert.show) {
    containAlert = (
      <Alert
        type="success"
        show={true}
        title={alert.title}
        subtitle={alert.subTitle}
        onClose={() => setAlert(prevState => ({ ...prevState, show: false }))}
      />
    );
  }

  return (
    <Fragment>
      <Container className={classes.root}>
        <Grid container className={`${classes.container}`}>
          <Grid item md={7} lg={8} className={classes.item}>
            <Box className={`${classes.burgerBox}`}>
              <Burger
                ingredients={ingredients}
                totalPrice={totalPrice}
                purchasing={purchasing}
              />
            </Box>
          </Grid>
          <Grid item md={5} lg={4} className={`${classes.item} right`}>
            <BuildControls
              ingredients={ingredients}
              ingredientRemove={removeIngredientHandler}
              ingredientAdded={addIngredientHandler}
              purchase={purchasabled}
              ordered={() => setPurchasing(true)}
            />
          </Grid>
        </Grid>
      </Container>
      {orderSummary}
      {containAlert}
    </Fragment>
  );
};

export default BurgerBuilder2;
