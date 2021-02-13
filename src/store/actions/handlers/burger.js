const BurgerActionsHandler = {
  addIngredient: (state, payload = {}) => {
    return {
      ...state,
      ...payload,
    };
  },
  // remove
  removeIngredient: (state, payload) => {
    return { ...state, ...payload };
  },
};

export default BurgerActionsHandler;
