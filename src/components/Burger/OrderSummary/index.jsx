import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ResultIngredients from "./ResultIngredients";
import useStyles from "./styles";

const OrderSummary = props => {
  const classes = useStyles();
  const { ingredients, totalPrice } = props;
  const ingredientArray = ingredients.map(ig => ig.ingredient);

  const filter = [...new Set(ingredientArray)].map(item => {
    const value = ingredients.filter(tes => tes.ingredient === item);
    return { ingredient: item, total: value.length };
  });

  const transformIngredient = filter.map((item, index) => (
    <ListItem key={index}>
      <ListItemText className={classes.listItem}>
        {item.ingredient} : {item.total}
      </ListItemText>
    </ListItem>
  ));

  return (
    <Container className={classes.root}>
      <Typography variant="body1" className={classes.textDark}>
        A Delicious burger with the following ingredients
      </Typography>
      <Grid container>
        <Grid item sm={6}>
          <ResultIngredients ingredients={ingredients} />
        </Grid>
        <Grid item sm={6} className={classes.orderInfo}>
          <Typography
            variant="subtitle1"
            className={`${classes.textDark} title`}
          >
            Ingredients :
          </Typography>
          <List dense={true}>{transformIngredient}</List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center" className={classes.price}>
            {" "}
            Total <span>Rp. {totalPrice}</span>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" component="p" className={classes.textDark}>
        Continue to Checkout ?{" "}
      </Typography>
    </Container>
  );
};

export default OrderSummary;
