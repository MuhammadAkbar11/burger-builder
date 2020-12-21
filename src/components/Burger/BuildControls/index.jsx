import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

import { Box, Button, Container, Paper, styled } from "@material-ui/core";

import meatImg from "../../../assets/svg/meat.svg";
import saladImg from "../../../assets/svg/seeds.svg";
import tomatoImg from "../../../assets/svg/tomato-left.svg";
import cheeseImg from "../../../assets/svg/cheese.svg";
import BuildControl from "./BuildControl.jsx";

const controls = [
  {
    label: "Salad",
    type: "salad",
    img: saladImg,
    price: 6000,
  },
  {
    label: "Meat",
    type: "meat",
    img: meatImg,
    price: 12000,
  },
  {
    label: "Tomato",
    type: "tomato",
    img: tomatoImg,
    price: 3000,
  },
  {
    label: "Cheese",
    type: "cheese",
    img: cheeseImg,
    price: 5000,
  },
];

const CheckoutButton = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  marginLeft: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  marginTop: "2rem",

  "&:hover": {
    backgroundColor: "#f5b216c9",
  },
  "&:active, &:focus": {
    backgroundColor: "#f5b216c9",
  },

  "&:disabled": {
    transform: "scale(0.9)",
    color: "f2f2f2",
    backgroundColor: "#f5b216c9",
  },
});

const BuildControls = props => {
  const classes = useStyles();
  const { ingredients } = props;

  let disabledInfo = controls
    .map(ctl => ctl.type)
    .reduce((ac, a) => {
      const exits = ingredients.filter(item => item.ingredient === a);
      return { ...ac, [a]: exits.length <= 0 };
    }, {});

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.controls}>
          {controls.map((item, index) => {
            return (
              <div key={`${item.label}${index + 1}`}>
                <BuildControl
                  added={() => props.ingredientAdded(item.type)}
                  remove={() => props.ingredientRemove(item.type)}
                  icon={item.img}
                  label={item.label}
                  type={item.type}
                  price={item.price}
                  disabled={disabledInfo[item.type]}
                />
              </div>
            );
          })}
        </Box>
        <CheckoutButton
          onClick={props.ordered}
          size="large"
          variant="contained"
          disabled={!props.purchase ? true : false}
        >
          Order now!
        </CheckoutButton>
      </Paper>
    </Container>
  );
};

BuildControls.propTypes = {
  ingredients: PropTypes.array,
  ingredientAdded: PropTypes.func,
  ingredientRemove: PropTypes.func,
  purchase: PropTypes.bool,
  ordered: PropTypes.func,
};

export default BuildControls;
