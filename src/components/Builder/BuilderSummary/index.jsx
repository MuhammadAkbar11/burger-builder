import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import useStyles from "./styles";
import FinalIngredients from "./FinalIngredients";
import formatRupiah from "../../../utils/formatRupiah";
import { ShoppingCart } from "@material-ui/icons";
import { Link, Redirect } from "react-router-dom";

const BuilderSummary = props => {
  const classes = useStyles();
  const { ingredients, burger } = props;

  const newIngredients = [{ id: 99, ingredient: "breads" }, ...ingredients];

  const ingredientArray = newIngredients.map(ig => ig.ingredient);

  const [qty, setQty] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(props.totalPrice);

  let filteredIngredients = [...new Set(ingredientArray)].map(item => {
    const value = newIngredients.filter(ig => ig.ingredient === item);
    console.log(value);
    return { ingredient: item, total: value.length };
  });

  const transformIngredient = filteredIngredients.map((item, index) => {
    const itemTotalPrice =
      props.ingredient_prices[item.ingredient] * item.total;

    return (
      <Box
        key={index}
        marginY={2}
        display="flex"
        className={`${classes.flexBetween} ${classes.ingredients}`}
        fontSize={16}
      >
        <Box>
          <span className={classes.ingredient}> {item.ingredient}</span>
          {item.ingredient !== "breads" ? ` x${item.total}` : ""}
        </Box>
        <Box>{formatRupiah(itemTotalPrice)}</Box>
      </Box>
    );
  });

  const incrementQty = () => {
    const oldQty = qty;
    const newQty = oldQty + 1;

    setQty(newQty);
    setTotalPrice(oldPrice => newQty * oldPrice);
  };

  const decrementQty = () => {
    const oldQty = qty;
    const newQty = oldQty - 1;

    if (oldQty > 1) {
      setQty(newQty);
      setTotalPrice(newQty * props.totalPrice);
    }
  };

  return filteredIngredients.length < 2 ? (
    <Redirect to="/builder" />
  ) : (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.root}>
        <div className={classes.titleSection}>
          <Typography variant="h4">Your Builder</Typography>
        </div>
        <Grid container className={classes.gridContainer}>
          <Grid item sm={6} md={7} lg={7} className={classes.gridItem}>
            {" "}
            <Typography
              style={{ textTransform: "capitalize" }}
              align="center"
              variant="h5"
            >
              {burger.name}
            </Typography>
            <br />
            <Typography
              align="center"
              variant="body1"
              className={classes.textDark}
            >
              {" "}
              A Delicious burger with the following ingredients
            </Typography>
            <div className={classes.finalIngredients}>
              <FinalIngredients ingredients={ingredients} />
              <Box display="flex" fontSize={20} mt={2} justifyContent="center">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={decrementQty}
                  className={classes.counter}
                >
                  -
                </Button>
                <Box marginX={3} display="flex" alignItems="center">
                  <span>{qty}</span>
                </Box>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={incrementQty}
                  className={classes.counter}
                >
                  +
                </Button>
              </Box>
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={5}
            lg={5}
            className={`${classes.gridItem} right`}
          >
            <Card variant="outlined" className={classes.cardDetails}>
              <CardContent>
                <Typography variant="h5" className="caption">
                  Builder Details
                </Typography>
                <div className="contents">
                  <div className={classes.flex}>
                    <div className={classes.flexItem}>
                      <Typography className={classes.quantity} variant="h6">
                        Qty
                      </Typography>
                    </div>
                    <div className={`${classes.flexItem} ${classes.cardValue}`}>
                      <Typography className={classes.quantity} variant="h6">
                        {qty}
                      </Typography>
                    </div>
                  </div>
                  <Box marginY={2}>
                    <Typography variant="h6">Ingredients </Typography>
                  </Box>
                  {transformIngredient}
                  <Box
                    marginY={2}
                    display="flex"
                    className={classes.flexBetween}
                    fontSize={17}
                    fontWeight={700}
                    borderTop={1}
                    borderColor="grey.600"
                    pt={2}
                  >
                    <Box>
                      <span>Total</span>
                    </Box>
                    <Box>
                      <span className={classes.totalPrice}>
                        {formatRupiah(totalPrice)}
                      </span>
                    </Box>
                  </Box>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Box
              mt={12}
              pr={3}
              pb={5}
              display="flex"
              className={classes.flexBetween}
            >
              <Link to="/builder" className={classes.cancelLink}>
                Back To Builder
              </Link>
              <Button
                size="large"
                color="primary"
                startIcon={<ShoppingCart />}
                variant="contained"
              >
                Continue To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    showModal: state.burger.showSummary,
    ingredient_prices: state.burger.ingredient_prices,
    burger: {
      name: state.burger.name,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BuilderSummary);
