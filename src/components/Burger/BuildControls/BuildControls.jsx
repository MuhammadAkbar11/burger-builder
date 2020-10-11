import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  makeStyles,
  Paper,
} from "@material-ui/core";
import BuildControl from "./BuildControl.jsx/BuildControl";

import meatImg from "../../../assets/svg/meat.svg";
import saladImg from "../../../assets/svg/seeds.svg";
import totatoImg from "../../../assets/svg/tomato-left.svg";
import cheeseImg from "../../../assets/svg/cheese.svg";

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
        <BuildControl icon={meatImg} label="Meat" />
        <BuildControl icon={saladImg} label="Salad" />
        <BuildControl icon={totatoImg} label="Tomato" />
        <BuildControl icon={cheeseImg} label="Cheese" />
      </Paper>
    </Container>
  );
};

export default BuildControls;
