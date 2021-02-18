import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import {
  Box,
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { connect } from "react-redux";
import formatRupiah from "../../utils/formatRupiah";
import { BurgerActionTypes } from "../../store/actions/types";

const useStyle = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: theme.spacing(3),
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar ": {
      left: "0px",
      width: "10px",
      display: "none",
      backgroundColor: "#f2f2f2",
    },

    [theme.breakpoints.down("md")]: {
      paddingbottom: theme.spacing(0),
      height: "auto",
    },

    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },

  card: {
    backgroundColor: "transparent",
    margin: "auto",
    position: "relative",
    minHeight: "100%",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: " center",
  },
  cardContent: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "40%",
    },

    [theme.breakpoints.only("md")]: {
      maxWidth: "40%",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "70%",
    },
  },

  body1: {
    color: theme.palette.slatelight,
    fontSize: "1rem",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: "-4px",
    textAlign: "center",
    opacity: "0.9",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
  ingredient: {
    cursor: "pointer",
    transition: "0.1s all ",
    "&:hover": {
      transform: "scale(0.96)",
    },
  },
  burgerName: {
    color: theme.palette.slate,
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  textprice: {
    fontWeight: 600,
    fontSize: "1.4em",
    color: "#DAE1C8",
    marginTop: "auto",
    whiteSpace: "nowrap",
    "& .price": {
      color: "#F5B316",
      marginLeft: "5px",
    },
  },
}));

const Burger = props => {
  const burgerStyles = useStyle();

  const { ingredients, totalPrice, onRemoveIngredientById } = props;

  const updatePurchaseStatus = data => data.length > 0;

  const removeIngredientById = (id, type) => {
    const removeSelectedIngredient = ingredients.filter(ing => {
      return ing.id !== id;
    });

    const updatedIngredients = [...removeSelectedIngredient];
    const isPurchase = updatePurchaseStatus(updatedIngredients);
    const priceDeduction = +props.ingredient_prices[type];
    const totalPrice = +props.totalPrice - priceDeduction;

    const updatedResult = {
      ingredients: updatedIngredients,
      totalPrice: totalPrice,
      purchasabled: isPurchase,
    };

    onRemoveIngredientById(updatedResult);
  };

  let transformedIngredients;
  transformedIngredients = ingredients.map(item => {
    return (
      <div
        onClick={() => removeIngredientById(item.id, item.ingredient)}
        className={burgerStyles.ingredient}
        key={item.id}
        title="Remove"
      >
        <BurgerIngredients type={item.ingredient} />
      </div>
    );
  });

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <Typography className={burgerStyles.body1} component="h4" variant="body1">
        Please start adding ingredients!
      </Typography>
    );
  }
  const formatPrice = formatRupiah(+totalPrice);

  return (
    <Container className={burgerStyles.root}>
      <Card className={burgerStyles.card}>
        <CardContent m="auto" className={burgerStyles.cardContent}>
          <BurgerIngredients type="bread-top" />
          {transformedIngredients}
          <BurgerIngredients type="bread-bottom" />
        </CardContent>
        <Box mt={4}>
          <Typography variant="h5" className={burgerStyles.burgerName}>
            {props.burger.name}
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography className={burgerStyles.textprice}>
            <span className={`price`}>{formatPrice}</span>
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({
  burger: {
    name: state.burger.name,
  },
  ingredientId: state.burger.ingredientId,
  ingredients: state.burger.ingredients,
  ingredient_prices: state.burger.ingredient_prices,
  totalPrice: state.burger.totalPrice,
});

const mapDispatchToProps = dispatch => {
  return {
    onRemoveIngredientById: data => {
      return dispatch({
        type: BurgerActionTypes.REMOVE_INGREDIENT,
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
