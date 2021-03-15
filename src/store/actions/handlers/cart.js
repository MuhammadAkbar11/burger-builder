const CartActionsHandler = {
  loadCart: (state, payload) => {
    const { cartItems } = payload;
    const arrCartItems = [];
    for (let id in cartItems) {
      arrCartItems.push({ id, ...cartItems[id] });
    }
    const getTotalPrice = arrCartItems.reduce((sum, cartItem) => {
      return sum + +cartItem.totalPrice;
    }, 0);

    return {
      ...state,
      cartItems: arrCartItems,
      totalPrice: getTotalPrice,
    };
  },
  setUpdated: (state, payload) => {
    return {
      ...state,
      isUpdatedCart: payload,
    };
  },
  addCart: (state, payload) => {
    return {
      ...state,
    };
  },
  updateCart: (state, payload) => {
    console.log(state, payload);
    return {
      ...state,
      cartItems: payload.cartItems,
      totalPrice: payload.totalPrice,
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
