import React from "react";
import PropTypes from "prop-types";

import { Container, makeStyles, Paper } from "@material-ui/core";
import BuildControl from "./BuildControl.jsx/BuildControl";

import meatImg from "../../../assets/svg/meat.svg";
import saladImg from "../../../assets/svg/seeds.svg";
import tomatoImg from "../../../assets/svg/tomato-left.svg";
import cheeseImg from "../../../assets/svg/cheese.svg";

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

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

const BuildControls = props => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        {controls.map((item, index) => {
          return (
            <BuildControl
              added={() => props.ingredientAdded(item.type)}
              remove={() => props.ingredientRemove(item.type)}
              key={`${item.label}${index + 1}`}
              icon={item.img}
              label={item.label}
              type={item.type}
              price={item.price}
              disabled={props.disabled[item.type]}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemove: PropTypes.func,
  disabled: PropTypes.object,
};

export default BuildControls;
