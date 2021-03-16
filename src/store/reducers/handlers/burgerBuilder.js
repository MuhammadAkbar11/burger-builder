const burgerBuilderReducerHandler = {
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
  clearAllIngs: state => {
    return {
      ...state,
      name: "",
      ingredients: [],
      totalPrice: 7000,
    };
  },
  setBurgerName: (state, payload) => {
    return {
      ...state,
      name: payload.value,
    };
  },
};

export default burgerBuilderReducerHandler;
