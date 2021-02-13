import CartActionsHandler from "../actions/handlers/cart";

const initalState = {
  cart: [],
  totalPrice: 0,
};

const { addCart, deleteCart, removeCarts } = CartActionsHandler;
