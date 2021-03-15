import CartActionsHandler from "../actions/handlers/cart";
import { CartActionTypes } from "../actions/types";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const { addCart, deleteCart, removeCarts } = CartActionsHandler;

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART:
      return addCart(state, action.payload);
    default:
      return state;
  }
};

export default CartReducer;
