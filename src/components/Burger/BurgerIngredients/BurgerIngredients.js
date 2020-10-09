import React from "react";
import PropTypes from "prop-types";

const BurgerIngredients = props => {
  let ingredient = null;

  // switch (props.type) {
  //   case "bread-bottom":
  //     ingredient = <div>this is bread Bottom</div>;
  //   break;
  //   case "bread-top":
  //     ingredient = (
  //       <div>
  //         <p>this is bread Bottom</p>
  //         <div>Seeds1</div>
  //         <div>Seeds2</div>
  //       </div>
  //     )
  //     break;
  //     case "meat":
  //     ingredient = <div>Meat</div>
  //     default:
  //     break
  // }

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div>this is bread Bottom</div>;
      break;
    case "bread-top":
      ingredient = (
        <div>
          <div>Seeds1</div>
          <div>Seeds2</div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div>Meat</div>;
    case "cheese":
      ingredient = <div>Cheese</div>;
    case "bacon":
      ingredient = <div>bacon</div>;
    case "salad":
      ingredient = <div>bacon</div>;
    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
