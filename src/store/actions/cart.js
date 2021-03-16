import { realtimeDatabase } from "../../services/firebase";
import { CartActionTypes } from "./actionsTypes";

export const _onGetCartItemBy = data => ({
  type: CartActionTypes.LOAD_CART,
  payload: data,
});

const setIsUpdated = status => ({
  type: CartActionTypes.SET_ISUPDATED,
  payload: status,
});

const saveCart = data => {
  return {
    type: CartActionTypes.UPDATE_CART,
    payload: data,
  };
};

export const _onIncrementCartItemQty = id => {
  return (dispatch, getState) => {
    dispatch(setIsUpdated(true));
    const cartState = getState().cart;
    const arrCartItems = [...cartState.cartItems];
    const selectedItem = arrCartItems.findIndex(item => item.id === id);
    const oldQty = arrCartItems[selectedItem].quantity;
    const igsPrice = arrCartItems[selectedItem].ingredientsPrice;
    const newQty = oldQty + 1;
    arrCartItems[selectedItem].quantity = +newQty;
    arrCartItems[selectedItem].totalPrice = +newQty * +igsPrice;

    const getTotalPrice = arrCartItems.reduce((sum, cartItem) => {
      return sum + +cartItem.totalPrice;
    }, 0);

    const updated = {
      cartItems: arrCartItems,
      totalPrice: getTotalPrice,
    };

    dispatch(saveCart(updated));
  };
};

export const _onDecrementCartItemQty = id => {
  return (dispatch, getState) => {
    dispatch(setIsUpdated(true));
    const cartState = getState().cart;
    const arrCartItems = [...cartState.cartItems];
    const selectedItem = arrCartItems.findIndex(item => item.id === id);
    const oldQty = arrCartItems[selectedItem].quantity;
    const igsPrice = arrCartItems[selectedItem].ingredientsPrice;

    const newQty = oldQty - 1;
    arrCartItems[selectedItem].quantity = +newQty;
    arrCartItems[selectedItem].totalPrice = +newQty * +igsPrice;

    const getTotalPrice = arrCartItems.reduce((sum, cartItem) => {
      return sum + +cartItem.totalPrice;
    }, 0);

    const updated = {
      cartItems: arrCartItems,
      totalPrice: getTotalPrice,
    };

    dispatch(saveCart(updated));
  };
};

export const _onUpdatedUserCart = () => async (dispatch, getState) => {
  let cartItemsObj = {};
  const cartState = getState().cart;
  const arrCartItems = [...cartState.cartItems];

  for (var i = 0, len = arrCartItems.length; i < len; i++) {
    cartItemsObj[arrCartItems[i]["id"]] = {
      _id: arrCartItems[i]["_id"],
      burgerName: arrCartItems[i]["burgerName"],
      ingredients: arrCartItems[i]["ingredients"],
      ingredientsPrice: arrCartItems[i]["ingredientsPrice"],
      quantity: arrCartItems[i]["quantity"],
      totalPrice: arrCartItems[i]["totalPrice"],
      userId: arrCartItems[i]["userId"],
    };
  }

  for (var key in cartItemsObj) arrCartItems.push(cartItemsObj[key]);
  await realtimeDatabase
    .ref("carts/cartItems")
    .update(cartItemsObj)
    .then(() => {
      dispatch(setIsUpdated(false));
    })
    .catch(err => console.log(err));
};
