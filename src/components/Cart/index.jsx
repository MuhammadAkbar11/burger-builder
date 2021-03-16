import React from "react";
import { Box, Typography, CircularProgress, Button } from "@material-ui/core";

import { realtimeDatabase } from "../../services/firebase";
import CartItem from "./CartItem";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import formatRupiah from "../../utils/formatRupiah";
import {
  _onIncrementCartItemQty,
  _onDecrementCartItemQty,
  _onUpdatedUserCart,
} from "../../store/actions";

const Cart = props => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const state = useSelector(state => ({
    totalItems: state.cart.totalItems,
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice,
    isUpdatedCart: state.cart.isUpdatedCart,
  }));

  const { isUpdatedCart, cartItems, totalPrice, totalItems } = state;
  const { loader } = props;

  const handleIncrement = id => {
    return dispatch(_onIncrementCartItemQty(id));
  };

  const handleDecrement = id => {
    dispatch(_onDecrementCartItemQty(id));
  };

  const handleRemoveCart = async id => {
    await realtimeDatabase.ref("carts/cartItems/" + id).remove();
  };

  let cartBodyContent = (
    <Box
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );

  let cartItemsContent = (
    <Box mt={5}>
      <Typography style={{ color: "#8C8C8C" }} variant="h5" align="center">
        Cart is Empty
      </Typography>
    </Box>
  );
  if (cartItems.length > 0) {
    cartItemsContent = (
      <Box>
        {cartItems.map(cart => {
          return (
            <CartItem
              key={cart.id}
              cartId={cart.id}
              title={cart.burgerName}
              igs={cart.ingredients}
              price={cart.totalPrice}
              quantity={cart.quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={handleRemoveCart}
            />
          );
        })}
      </Box>
    );
  }

  if (!loader) {
    cartBodyContent = <Box>{cartItemsContent}</Box>;
  }

  return (
    <>
      <Box px={3} py={1} className={classes.cartHeader}>
        <Box my="auto" display="flex" alignItems="center">
          <Typography variant="h6" style={{ marginRight: "1rem" }}>
            Cart
          </Typography>
          <Typography color="primary" variant="subtitle2">
            {totalItems} Items
          </Typography>
        </Box>
        {isUpdatedCart && (
          <Box>
            <Button
              variant="outlined"
              onClick={() => dispatch(_onUpdatedUserCart())}
              color="primary"
              size="small"
            >
              Update
            </Button>
          </Box>
        )}
      </Box>
      <Box className={classes.cartBody} px={3} pb={3}>
        {cartBodyContent}
      </Box>
      <Box
        className={classes.cartFooter}
        flex={1}
        pt={2}
        display="flex"
        alignItems="center"
        width="100%"
        px={3}
      >
        <Button
          size="large"
          disabled={cartItems.length < 1 || isUpdatedCart}
          variant="contained"
          color="primary"
          className={classes.btnOrder}
          fullWidth={true}
        >
          <Typography>Order now </Typography>
          <span style={{ textTransform: "capitalize", marginLeft: ".5rem" }}>
            {" "}
            {formatRupiah(totalPrice)}
          </span>
        </Button>
      </Box>
    </>
  );
};

export default Cart;
