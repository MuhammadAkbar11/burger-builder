import BurgerActionsHandler from "../actions/handlers/burger";
import { BurgerActionTypes } from "../actions/types";

import meatImg from "../../assets/svg/meat.svg";
import saladImg from "../../assets/svg/seeds.svg";
import tomatoImg from "../../assets/svg/tomato-left.svg";
import cheeseImg from "../../assets/svg/cheese.svg";

const initialState = {
  name: "",
  ingredientId: 1,
  ingredients: [],
  totalPrice: 7000,
  controls: [
    {
      label: "Salad",
      type: "salad",
      img: saladImg,
      price: 6000,
    },
    {
      label: "Meat",
      type: "meat",
      img: meatImg,
      price: 12000,
    },
    {
      label: "Tomato",
      type: "tomato",
      img: tomatoImg,
      price: 3000,
    },
    {
      label: "Cheese",
      type: "cheese",
      img: cheeseImg,
      price: 5000,
    },
  ],
  ingredient_prices: {
    salad: 6000,
    meat: 12000,
    cheese: 5000,
    tomato: 3000,
  },
  purchasabled: false,
  showSummary: false,
};

const { addIngredient, removeIngredient, setBurgerName } = BurgerActionsHandler;

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BurgerActionTypes.ADD_INGREDIENT:
      return addIngredient(state, action.payload);
    case BurgerActionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action.payload);
    case BurgerActionTypes.SET_BURGER_NAME:
      return setBurgerName(state, action.payload);
    default:
      return state;
  }
};

export default BurgerReducer;
