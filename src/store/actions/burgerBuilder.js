import { BurgerActionTypes } from "./actionsTypes";

export const _onSetBurgerName = value => {
  return {
    type: BurgerActionTypes.SET_BURGER_NAME,
    payload: value,
  };
};

export const _onClearIngredients = () => {
  return { type: BurgerActionTypes.CLEAR_INGS, payload: {} };
};

export const _onAddingIngredient = data => ({
  type: BurgerActionTypes.ADD_INGREDIENT,
  payload: data,
});

export const _onRemovingIngredient = data => ({
  type: BurgerActionTypes.REMOVE_INGREDIENT,
  payload: data,
});
