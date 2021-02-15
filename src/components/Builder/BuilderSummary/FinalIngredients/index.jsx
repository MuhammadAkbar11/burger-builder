import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

import { Box } from "@material-ui/core";
import BurgerIngredients from "../../../Burger/BurgerIngredients/BurgerIngredients";

const defaultProps = {
  ingredients: [],
};

const proptypes = {
  ingredients: PropTypes.array,
};

const FinalIngredients = props => {
  const { ingredients } = props;
  const classes = useStyles();
  const transformedIngredients = ingredients.map(item => {
    return <BurgerIngredients key={item.id} type={item.ingredient} />;
  });

  return (
    <Box className={classes.root}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </Box>
  );
};

FinalIngredients.defaultProps = defaultProps;

FinalIngredients.propTypes = proptypes;

export default FinalIngredients;
