import React, { Fragment } from "react";
import Aux from "../../hoc/Aux";
import TopBar from "./Topbar";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    margin: 0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  footer: {
    marginTop: "auto",
    paddingTop: theme.spacing(1),
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    bottom: 0,
    color: "#dae1e7",
  },

  divider: {
    width: "98%",
    marginBottom: theme.spacing(2),
  },
}));

const Layout = props => {
  const classes = useStyles();
  return (
    <Aux>
      <Box className={classes.root}>
        <TopBar />
        <Fragment>{props.children}</Fragment>
        <Box className={classes.footer}>
          <Divider className={classes.divider} />
          <Typography variant="body1">Muhammad Akbar 2020</Typography>
        </Box>
      </Box>
    </Aux>
  );
};

export default Layout;
