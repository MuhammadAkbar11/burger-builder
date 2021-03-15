import React from "react";
import { Box, Typography, CircularProgress, Button } from "@material-ui/core";
import { CartActionTypes } from "../../store/actions/types";
import { realtimeDatabase } from "../../services/firebase";
import CartItem from "./CartItem";
import useStyles from "./styles";
import { connect } from "react-redux";
import formatRupiah from "../../utils/formatRupiah";

const Cart = props => {
  const classes = useStyles();

  const { isUpdatedCart, cartItems, totalPrice } = props;

  const [loader, setLoader] = React.useState(true);

  const getCart = async () => {
    await realtimeDatabase.ref("carts").on("value", snapshot => {
      props.getCartItems(snapshot.val());
      setLoader(false);
    });
  };

  React.useEffect(() => {
    getCart();
    return () => {
      getCart();
    };
  }, []);

  const handleInrement = id => {
    props.onSetIsUpdated(true);
    const arrCartItems = [...cartItems];
    const selectedItem = arrCartItems.findIndex(item => item.id === id);
    const oldQty = arrCartItems[selectedItem].quantity;
    const igsPrice = arrCartItems[selectedItem].ingredientsPrice;
    const newQty = oldQty + 1;
    arrCartItems[selectedItem].quantity = +newQty;
    arrCartItems[selectedItem].totalPrice = +newQty * +igsPrice;

    const getTotalPrice = arrCartItems.reduce((sum, cartItem) => {
      return sum + +cartItem.totalPrice;
    }, 0);

    props.updateCartItems({
      cartItems: arrCartItems,
      totalPrice: getTotalPrice,
    });
  };

  const handleDecrement = id => {
    props.onSetIsUpdated(true);
    const arrCartItems = [...cartItems];
    const selectedItem = arrCartItems.findIndex(item => item.id === id);
    const oldQty = arrCartItems[selectedItem].quantity;
    const igsPrice = arrCartItems[selectedItem].ingredientsPrice;

    const newQty = oldQty - 1;
    arrCartItems[selectedItem].quantity = +newQty;
    arrCartItems[selectedItem].totalPrice = +newQty * +igsPrice;

    const getTotalPrice = arrCartItems.reduce((sum, cartItem) => {
      return sum + +cartItem.totalPrice;
    }, 0);

    props.updateCartItems({
      cartItems: arrCartItems,
      totalPrice: getTotalPrice,
    });
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
              onIncrement={handleInrement}
              onDecrement={handleDecrement}
            />
          );
        })}
      </Box>
    );
  }

  if (!loader) {
    cartBodyContent = <Box>{cartItemsContent}</Box>;
  }

  const updateCart = async () => {
    let cartItemsObj = {};
    const arrCartItems = [...cartItems];
    for (var i = 0, len = arrCartItems.length; i < len; i++) {
      console.log(i);
      console.log(arrCartItems[i]);
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
    console.log(cartItemsObj);

    await realtimeDatabase
      .ref("carts/cartItems")
      .update(cartItemsObj)
      .then(result => {
        console.log(result);
        props.onSetIsUpdated(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Box px={3} py={2} className={classes.cartHeader}>
        <Box my="auto" display="flex" alignItems="center">
          <Typography variant="h6" style={{ marginRight: "1rem" }}>
            Cart
          </Typography>
          <Typography color="primary" variant="subtitle2">
            {cartItems.length} Items
          </Typography>
        </Box>
        {isUpdatedCart && (
          <Box>
            <Button
              variant="outlined"
              onClick={updateCart}
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
        py={2}
        display="flex"
        width="100%"
        px={3}
      >
        <Button
          size="large"
          disabled={cartItems.length < 1}
          variant="contained"
          color="primary"
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

const mapStateToProps = state => {
  console.log(state.cart);
  return {
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice,
    isUpdatedCart: state.cart.isUpdatedCart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartItems: data => {
      return dispatch({ type: CartActionTypes.LOAD_CART, payload: data });
    },
    updateCartItems: data => {
      return dispatch({ type: CartActionTypes.UPDATE_CART, payload: data });
    },
    onSetIsUpdated: status => {
      return dispatch({ type: CartActionTypes.SET_ISUPDATED, payload: status });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
