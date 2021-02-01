import React from "react";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder";
import { Redirect, Route, Switch } from "react-router-dom";
import Checkout from "./containers/Checkout";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",

    minHeight: "100vh",
    position: "relative",
  },
  layout: {},
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f5b316",
      dark: "#f5b216c9",
    },
    dark: "#121212",
    light: "#f2f2f2",
    slate: "#8C8C8C",
    slatelight: "#c9c8c8",
    success: {
      main: "#3ae57f",
    },
    danger: {
      main: "#fd3a69",
    },
  },
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/builder" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Redirect from="/" to="builder" />
          </Switch>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
