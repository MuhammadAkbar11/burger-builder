const BurgerHandleActions = {
  addIngredient: state => {
    console.log(state, "Handler");
  },
  // remove
  removeIngredient: state => {
    console.log(state, "remove");
  },
};

export default BurgerHandleActions;
