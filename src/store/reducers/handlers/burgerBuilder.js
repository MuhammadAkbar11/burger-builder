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
  // clear all ingredients
  clearAllIngs: state => {
    return {
      ...state,
      name: "",
      ingredients: [],
      totalPrice: 7000,
    };
  },
  // set burger name
  setBurgerName: (state, payload) => {
    return {
      ...state,
      name: payload.value,
    };
  },
};

export default burgerBuilderReducerHandler;
