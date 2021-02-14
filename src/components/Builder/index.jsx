import React from "react";
import { Grid, Box } from "@material-ui/core";
import BuildControls from "../Burger/BuildControls";
import Burger from "../Burger";
import useStyles from "./styles";
import { Redirect, useHistory } from "react-router-dom";

const BurgerBuilderContain = props => {
  const classes = useStyles();

  if (props.burgerName !== "") {
    return (
      <Grid container className={`${classes.root}`}>
        <Grid item md={7} lg={8} className={classes.item}>
          <Box className={`${classes.burgerBox}`}>
            <Burger />
          </Box>
        </Grid>
        <Grid item md={5} lg={4} className={`${classes.item} right`}>
          <BuildControls />
        </Grid>
      </Grid>
    );
  }

  return <Redirect to="/builder/start" />;
};

export default BurgerBuilderContain;
