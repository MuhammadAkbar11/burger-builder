import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import CheckoutForm from "./CheckoutForm";
import CheckoutDetails from "./CheckoutDetails";

const CheckoutSummary = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item md={7} lg={7} className={`${classes.gridItem}`}>
          <Typography variant="body1" className={classes.caption}>
            Isi formulir pemesanan di bawah ini untuk menyelesaikan pembelian
            Anda
          </Typography>
          <CheckoutForm />
        </Grid>
        <Grid item md={5} lg={5} className={`${classes.gridItem} right`}>
          <CheckoutDetails />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CheckoutSummary;
