import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import useStyles from "./styles";
import Cart from "../../components/Cart";
import { realtimeDatabase } from "../../services/firebase";
import { connect } from "react-redux";
import { CartActionTypes } from "../../store/actions/types";

const Burgers = props => {
  const classes = useStyles();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [cartLoader, setCartLoader] = React.useState(true);
  const [moutedCart, setMountedCart] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    const getCart = async () => {
      return await realtimeDatabase.ref("carts").on("value", snapshot => {
        if (mounted) {
          setCartLoader(false);
          props.getCartItems(snapshot.val());
        }
      });
    };

    getCart();
    return () => (mounted = false);
  }, [moutedCart]);

  React.useEffect(() => {
    setMountedCart(true);
    if (isSm) {
      setMountedCart(false);
    }

    return () => {
      setMountedCart(false);
    };
  }, [isSm]);

  return (
    <Grid container className={`${classes.root}`}>
      <Grid item md={7} lg={8} className={classes.item}>
        <Box className={``}></Box>
      </Grid>
      <Grid
        item
        md={5}
        lg={4}
        className={`${classes.item} right ${classes.cart}`}
      >
        {moutedCart ? <Cart isMouted={moutedCart} loader={cartLoader} /> : null}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    totalItems: state.cart.totalItems,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burgers);
