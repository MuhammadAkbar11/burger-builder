import React, { Component } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},

  listItemValue: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },
  textDark: {
    color: "#8C8C8C",
  },
  price: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

class ContentOrderSummary extends Component {
  render() {
    const { ingredients, price, classes } = this.props;
    const ingredientSummary = Object.keys(ingredients).map((igKey, index) => {
      const key = index;
      return (
        <ListItem dense key={key}>
          <ListItemText>
            <Typography variant="body2">
              {" "}
              {index + 1}. {igKey}:{" "}
              <span className={classes.listItemValue}>
                {this.props.ingredients[igKey]}
              </span>
            </Typography>
          </ListItemText>
        </ListItem>
      );
    });

    return (
      <Box>
        <Typography variant="body1" className={classes.textDark}>
          A Delicious burger with the following ingredients
        </Typography>
        <List>{ingredientSummary}</List>
        <Typography variant="body1" component="p" className={classes.price}>
          <strong>Total Price : {price}</strong>
        </Typography>

        <Typography variant="body2" component="p" className={classes.textDark}>
          Continue to Checkout ?{" "}
        </Typography>
      </Box>
    );
  }
}

const OrderSummary = props => {
  const classes = useStyles();
  return <ContentOrderSummary {...props} classes={classes} />;
};

export default OrderSummary;
