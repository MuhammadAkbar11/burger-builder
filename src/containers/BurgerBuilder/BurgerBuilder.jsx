import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

import { Container, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexFlow: 1,
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  container: {
    padding: theme.spacing(3),
    height: "100%",
  },
  item: {
    height: "100%",
  },
}));

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 1,
        meat: 2,
        tomato: 1,
        cheese: 1,
      },
    };
  }

  render() {
    const { ingredients } = this.state;
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <Grid container className={`${classes.container}`}>
          <Grid item md={8} className={classes.item}>
            <Burger ingredients={ingredients} />
          </Grid>
          <Grid item md={4} className={classes.item}>
            <Paper />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default () => {
  const classes = useStyles();
  return <BurgerBuilder classes={classes} />;
};
