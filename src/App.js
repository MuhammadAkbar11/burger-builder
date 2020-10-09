import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    minHeight: "100vh",
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
