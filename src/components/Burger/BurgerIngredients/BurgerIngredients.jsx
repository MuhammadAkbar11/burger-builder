import React from "react";
import PropTypes from "prop-types";
import BreadTop from "./BreadTop";
import BreadBottom from "./BreadBottom";
import Tomato from "./Tomato";
import Cheese from "./Cheese";
import Meat from "./Meat";
import Salad from "./Salad";

const BurgerIngredients = props => {
  let ingredient = null;

  switch (props.type) {
    case "salad":
      ingredient = <Salad />;
      break;
    case "bread-bottom":
      ingredient = <BreadBottom />;
      break;
    case "bread-top":
      ingredient = <BreadTop />;
      break;
    case "meat":
      ingredient = <Meat />;
      break;
    case "cheese":
      ingredient = <Cheese />;
      break;
    case "tomato":
      ingredient = <Tomato />;
      break;

    default:
      ingredient = null;
      break;
  }
  console.log(ingredient);
  return ingredient;
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
