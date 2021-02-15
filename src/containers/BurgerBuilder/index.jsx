import React, { Fragment } from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { BurgerActionTypes } from "../../store/actions/types";

import Started from "../../components/Builder/GetStarted";
import BuilderContainer from "../../components/Builder";
import BuilderSummary from "../../components/Builder/BuilderSummary";

const BurgerBuilder2 = props => {
  const classes = useStyles();

  const setBurgerName = value => {
    const result = {
      value: value,
    };
    props.onSetBurgerName(result);
  };

  return (
    <Fragment>
      <Switch>
        <Route exact path={props.match.path}>
          <Container maxWidth="xl" className={classes.root}>
            <BuilderContainer burgerName={props.burgerName} />
          </Container>
        </Route>
        <Route path={`${props.match.path}/start`}>
          <Container maxWidth="xl" className={classes.root}>
            <Started
              onSetBurgerName={setBurgerName}
              isStarted={props.burgerName.trim() === ""}
            />
          </Container>
        </Route>
        <Route path={`${props.match.path}/summary`}>
          <BuilderSummary />
        </Route>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    burgerName: state.burger.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetBurgerName: value => {
      return dispatch({
        type: BurgerActionTypes.SET_BURGER_NAME,
        payload: value,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder2);
