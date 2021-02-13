import CartActionsHandler from "../actions/handlers/cart";
import { CartActionTypes } from "../actions/types";

const initalState = {
  cart: [],
  totalPrice: 0,
};

const { addCart, deleteCart, removeCarts } = CartActionsHandler;

const CartReducer = (state = initialState, action) => {
  switch (key) {
    case CartActionTypes.ADD_CART:
      return addCart(state);

    default:
      return state;
  }
};

export default CartReducer;
