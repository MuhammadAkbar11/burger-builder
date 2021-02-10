import React from "react";
import { Container, Typography } from "@material-ui/core";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary";
import useStyles from "./styles";

function Checkout(props) {
  const classes = useStyles();

  const [ingredients, setIngredients] = React.useState([]);

  return (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.root}>
        <div className={classes.title}>
          <Typography color="primary" variant="h2">
            Checkout
          </Typography>
        </div>
        <CheckoutSummary />
      </Container>
    </React.Fragment>
  );
}

export default Checkout;
