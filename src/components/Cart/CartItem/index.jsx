import React from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BurgerIngredients from "../../Burger/BurgerIngredients/BurgerIngredients";
import useStyles from "./styles";
import formatRupiah from "../../../utils/formatRupiah";

const CartItem = props => {
  const classes = useStyles();
  const { igs, cartId, title, price, quantity } = props;

  const subtotal = formatRupiah(price);
  return (
    <Box
      mt={2}
      minHeight={100}
      width="100%"
      display="flex"
      justifyContent="start"
      alignItems="center"
      pt={1}
      pb={2}
      px={2}
      className={classes.root}
      borderRadius={3}
    >
      <Box
        minHeight={100}
        display="flex"
        flexWrap="wrap"
        alignItems="flex-end"
        width={70}
      >
        <Box>
          {" "}
          <BurgerIngredients type="bread-top" />
          {igs.map(ig => {
            return <BurgerIngredients key={ig.id} type={ig.ingredient} />;
          })}
          <BurgerIngredients type="bread-bottom" />
        </Box>
      </Box>
      <Box
        minHeight={100}
        display="flex"
        flexDirection="column"
        flex={1}
        alignItems="start"
        justifyContent="flex-end"
        pl={2}
        mx={2}
      >
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
        <Box gridGap={2} display="flex" mt={1}>
          <Button
            fullWidth={false}
            size="small"
            className={classes.buttonCounter}
            variant="outlined"
            color="primary"
            onClick={() => props.onDecrement(cartId)}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <div className={classes.quantity}>{quantity}</div>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.buttonCounter}
            onClick={() => props.onIncrement(cartId)}
          >
            +
          </Button>
        </Box>
      </Box>
      <Box
        minHeight={100}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        style={{ justifyContent: "space-between" }}
      >
        <IconButton variant="contained" className={classes.btnRemove}>
          <DeleteIcon />
        </IconButton>
        <span className={classes.price}>{subtotal}</span>
      </Box>
    </Box>
  );
};

export default CartItem;
