import React, { Fragment } from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { BurgerActionTypes } from "../../store/actions/types";
import BuilderSummary from "../../components/Burger/BuilderSummary";
import Started from "../../components/Builder/GetStarted";
import BuilderContainer from "../../components/Builder";

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
      <Container className={classes.root}>
        <Switch>
          <Route exact path={props.match.path}>
            <BuilderContainer burgerName={props.burgerName} />
          </Route>
          <Route path={`${props.match.path}/start`}>
            <Started
              onSetBurgerName={setBurgerName}
              isStarted={props.burgerName.trim() === ""}
            />
          </Route>
        </Switch>
      </Container>
      <BuilderSummary />
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
