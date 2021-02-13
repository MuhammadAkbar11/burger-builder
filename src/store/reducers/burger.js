import BurgerHandleActions from "../actions/handlers/burger";
import { BurgerActionTypes } from "../actions/types";

const initialState = {
  ingredients: [],
  totalPrice: 7000,
};

const { addIngredient, removeIngredient } = BurgerHandleActions;

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BurgerActionTypes.ADD_INGREDIENT:
      return addIngredient(state);
    case BurgerActionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state);
    default:
      return state;
  }
};

export default BurgerReducer;
