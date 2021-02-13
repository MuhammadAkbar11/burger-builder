const CartActionsHandler = {
  addCart: state => {
    console.log(state, "add");
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
