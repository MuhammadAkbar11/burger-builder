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
  listItem: {
    paddingLeft: theme.spacing(0),
    fontSize: "1.1rem",
  },
  listItemLabel: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
  },
}));

const OrderSummary = props => {
  const classes = useStyles();
  const { ingredients } = props;
  const ingredientSummary = Object.keys(ingredients).map((igKey, index) => {
    const key = index;
    return (
      <ListItem dense key={key} className={classes.listItem}>
        <ListItemText>
          <span className={classes.listItemLabel}>{igKey}</span> :{" "}
          {props.ingredients[igKey]}
        </ListItemText>
      </ListItem>
    );
  });
  return (
    <Box>
      <Typography variant="subtitle2">
        A Delicious burger with the following ingredients
      </Typography>
      <List>{ingredientSummary}</List>
    </Box>
  );
};

export default OrderSummary;
