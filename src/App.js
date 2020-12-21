import React from "react";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Layout from "./components/Layouts/Layout";
// import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import BurgerBuilder2 from "./containers/BurgerBuilderV2";

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
    primary: {
      main: "#f5b316",
      dark: "#f5b216c9",
    },
    dark: "#121212",
    light: "#dae1e7",
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
          <BurgerBuilder2 />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
