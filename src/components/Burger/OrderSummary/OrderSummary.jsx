import React from "react";
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
}));

const OrderSummary = props => {
  const classes = useStyles();
  const { ingredients } = props;
  const ingredientSummary = Object.keys(ingredients).map((igKey, index) => {
    const key = index;
    return (
      <ListItem dense key={key}>
        <ListItemText>
          <Typography variant="body2">
            {" "}
            {index + 1}. {igKey}:{" "}
            <span className={classes.listItemValue}>
              {props.ingredients[igKey]}
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
      <Typography variant="body2" component="p" className={classes.textDark}>
        Continue to Checkout ?{" "}
      </Typography>
    </Box>
  );
};

export default OrderSummary;
