const BurgerActionsHandler = {
  addIngredient: (state, payload = {}) => {
    return {
      ...state,
      ...payload,
    };
  },
  // remove
  removeIngredient: state => {
    console.log(state, "remove");
  },
};

export default BurgerActionsHandler;
