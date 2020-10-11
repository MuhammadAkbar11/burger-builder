import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Test from "./containers/Test";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",

    minHeight: "100vh",
    position: "relative",
  },
  layout: {},
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
