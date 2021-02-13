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

  // const [alert, setAlert] = React.useState({
  //   show: false,
  //   type: "success",
  //   title: "Success",
  //   subTitle: "Your order was successful",
  // });

  // let orderSummary = (
  //   <OrderModal
  //     open={purchasing}
  //     title="Your Order"
  //     handleCancelled={() => setPurchasing(false)}
  //     handleContinue={purchaseContinueHandler}
  //   >
  //     <OrderSummary ingredients={ingredients} totalPrice={totalPrice} />
  //   </OrderModal>
  // );

  // if (loading) {
  //   orderSummary = <Spinner open={true} />;
  // }

  // let containAlert;
  // if (alert.show) {
  //   containAlert = (
  //     <Alert
  //       type={alert.type}
  //       show={true}
  //       title={alert.title}
  //       subtitle={alert.subTitle}
  //       onClose={() => setAlert(prevState => ({ ...prevState, show: false }))}
  //     />
  //   );
  // }

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
      {containAlert}
    </Fragment>
  );
};

export default BurgerBuilder2;
