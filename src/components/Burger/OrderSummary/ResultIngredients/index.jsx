import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

import BurgerIngredients from "../../BurgerIngredients/BurgerIngredients";
import { Box } from "@material-ui/core";

const defaultProps = {
  ingredients: [],
};

const proptypes = {
  ingredients: PropTypes.array,
};

const ResultIngredients = props => {
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

ResultIngredients.defaultProps = defaultProps;

ResultIngredients.propTypes = proptypes;

export default ResultIngredients;
