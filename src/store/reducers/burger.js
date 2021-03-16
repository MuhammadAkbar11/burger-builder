import { BurgerActionTypes } from "../actions/actionsTypes";

import meatImg from "../../assets/svg/meat.svg";
import saladImg from "../../assets/svg/seeds.svg";
import tomatoImg from "../../assets/svg/tomato-left.svg";
import cheeseImg from "../../assets/svg/cheese.svg";

import { burgerBuilderReducerHandler } from "./handlers";

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
      price: 1500,
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
      price: 1000,
    },
    {
      label: "Cheese",
      type: "cheese",
      img: cheeseImg,
      price: 3500,
    },
  ],
  ingredient_prices: {
    salad: 1500,
    meat: 15000,
    cheese: 3500,
    tomato: 1000,
    breads: 7000,
  },
  purchasabled: false,
  showSummary: false,
};

const {
  addIngredient,
  removeIngredient,
  setBurgerName,
  clearAllIngs,
} = burgerBuilderReducerHandler;

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BurgerActionTypes.ADD_INGREDIENT:
      return addIngredient(state, action.payload);
    case BurgerActionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action.payload);
    case BurgerActionTypes.SET_BURGER_NAME:
      return setBurgerName(state, action.payload);
    case BurgerActionTypes.CLEAR_INGS:
      return clearAllIngs(state);
    default:
      return state;
  }
};

export default BurgerReducer;
