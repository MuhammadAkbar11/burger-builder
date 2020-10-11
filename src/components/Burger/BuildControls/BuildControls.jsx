import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
}));

const BuildControls = props => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <h1>OK</h1>
    </Container>
  );
};

export default BuildControls;
