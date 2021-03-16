import React, { Fragment } from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Started from "../../components/Builder/GetStarted";
import BuilderContainer from "../../components/Builder";
import BuilderSummary from "../../components/Builder/BuilderSummary";
import { _onSetBurgerName } from "../../store/actions";

const BurgerBuilder2 = props => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const burgerName = useSelector(state => state.burger.name);

  const setBurgerName = value => {
    const result = {
      value: value,
    };
    dispatch(_onSetBurgerName(result));
  };

  return (
    <Fragment>
      <Switch>
        <Route exact path={props.match.path}>
          <Container maxWidth="xl" className={classes.root}>
            <BuilderContainer />
          </Container>
        </Route>
        <Route path={`${props.match.path}/start`}>
          <Container maxWidth="xl" className={classes.root}>
            <Started
              onSetBurgerName={setBurgerName}
              isStarted={burgerName.trim() === ""}
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

export default BurgerBuilder2;
