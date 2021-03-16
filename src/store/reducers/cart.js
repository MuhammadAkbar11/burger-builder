import { cartReducerHandler } from "./handlers";
import { CartActionTypes } from "../actions/actionsTypes";

const initialState = {
  isUpdatedCart: false,
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const { addCart, updateCart, loadCart, setUpdated } = cartReducerHandler;

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_CART:
      return addCart(state, action.payload);
    case CartActionTypes.UPDATE_CART:
      return updateCart(state, action.payload);
    case CartActionTypes.LOAD_CART:
      return loadCart(state, action.payload);
    case CartActionTypes.SET_ISUPDATED:
      return setUpdated(state, action.payload);
    default:
      return state;
  }
};

export default CartReducer;
