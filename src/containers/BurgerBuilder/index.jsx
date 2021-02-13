import React, { Fragment } from "react";

import useStyles from "./styles";
import { Container, Grid, Box } from "@material-ui/core";
import BuildControls from "../../components/Burger/BuildControls";
import Burger from "../../components/Burger";
import OrderModal from "../../components/UI/OrderModal/OrderModal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import Alert from "../../components/UI/Alert";
import { useHistory } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 6000,
  meat: 12000,
  cheese: 5000,
  tomato: 3000,
};

const BurgerBuilder2 = () => {
  const classes = useStyles();
  const history = useHistory();

  const [ingredientId, setIngredientId] = React.useState(1);
  const [ingredients, setIngredients] = React.useState([]);

  const [totalPrice, setTotalPrice] = React.useState(7000);
  const [purchasabled, setPurchasabled] = React.useState(false);
  const [purchasing, setPurchasing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    show: false,
    type: "success",
    title: "Success",
    subTitle: "Your order was successful",
  });

  const purchaseContinueHandler = () => {
    history.push("checkout");
    // setPurchasing(false);
    // setLoading(true);
    // const order = {
    //   ingredients: ingredients,
    //   price: totalPrice,
    //   costumer: {
    //     userId: 1,
    //     name: "Akbar",
    //     email: "akbar@gmail.com",
    //     address: {
    //       street: "jln Antara",
    //       zipCode: "12345",
    //       city: "Bekasi",
    //     },
    //   },
    //   deliveryMethod: "fastest",
    // };
    // try {
    //   const orderListRef = await firebase.database().ref("orders");
    //   orderListRef.push().set(order, err => {
    //     if (err) {
    //       return setAlert(prevState => {
    //         return {
    //           show: true,
    //           type: "error",
    //           title: prevState.title,
    //           subTitle: prevState.subTitle,
    //         };
    //       });
    //     } else {
    //       setTimeout(() => {
    //         setPurchasing(false);
    //         setLoading(false);
    //         setAlert(prevState => {
    //           return {
    //             show: true,
    //             type: "success",
    //             title: prevState.title,
    //             subTitle: prevState.subTitle,
    //           };
    //         });
    //         setIngredients([]);
    //         setTotalPrice(7000);
    //       }, 1500);
    //     }
    //   });
    // } catch {
    //   setLoading(false);
    //   return console.log("try");
    // }
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
        type={alert.type}
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
              <Burger />
            </Box>
          </Grid>
          <Grid item md={5} lg={4} className={`${classes.item} right`}>
            <BuildControls />
          </Grid>
        </Grid>
      </Container>
      {orderSummary}
      {containAlert}
    </Fragment>
  );
};

export default BurgerBuilder2;
