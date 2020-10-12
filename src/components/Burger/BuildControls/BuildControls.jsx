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
  },
  {
    label: "Meat",
    type: "meat",
    img: meatImg,
  },
  {
    label: "Tomato",
    type: "tomato",
    img: tomatoImg,
  },
  {
    label: "Cheese",
    type: "cheese",
    img: cheeseImg,
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
              key={`${item.label}${index + 1}`}
              icon={item.img}
              label={item.label}
              type={item.type}
            />
          );
        })}
        {/* <BuildControl icon={meatImg} label="Meat" />
        <BuildControl icon={saladImg} label="Salad" />
        <BuildControl icon={tomatoImg} label="Tomato" />
        <BuildControl icon={cheeseImg} label="Cheese" /> */}
      </Paper>
    </Container>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemove: PropTypes.func,
};

export default BuildControls;
