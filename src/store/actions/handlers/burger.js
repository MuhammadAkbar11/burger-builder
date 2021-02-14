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
  setBurgerName: (state, payload) => {
    return {
      ...state,
      name: payload.value,
    };
  },
};

export default BurgerActionsHandler;
