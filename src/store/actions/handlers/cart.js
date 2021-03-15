const CartActionsHandler = {
  addCart: (state, payload) => {
    return {
      ...state,
    };
  },
  update: state => {
    console.log(state, "update");
    return {
      ...state,
    };
  },
  deleteCart: state => {
    console.log(state, "remove");
    return {
      ...state,
    };
  },
  removeCarts: state => state => {
    console.log(state, "remove all");
    return {
      ...state,
    };
  },
};

export default CartActionsHandler;
