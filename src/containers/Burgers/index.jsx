import React from "react";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Cart from "../../components/Cart";

const Burgers = props => {
  const classes = useStyles();

  return (
    <Grid container className={`${classes.root}`}>
      <Grid item md={7} lg={8} className={classes.item}>
        <Box className={``}>
          {/* <Burger removingIngredient={removeIngredientHandler} /> */}
        </Box>
      </Grid>
      <Grid
        item
        md={5}
        lg={4}
        className={`${classes.item} right ${classes.cart}`}
      >
        <Cart />
      </Grid>
    </Grid>
  );
};

export default Burgers;
