import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Box, Link as LinkItem } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: "#ffa45c",
      boxShadow: "0 0 0.2rem #5d5d5a",
      "& > *": {
        color: "#5d5d5a",
      },
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: "#5d5d5a",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      fontSize: "1rem",
      "&:hover": {
        color: "#333",
        opacity: "0.8",
      },
      "&.active": {
        color: "#333",
        fontWeight: "600",
      },
    },
  })
);

const TopBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BurgerBuilder
          </Typography>
          <Box display="flex">
            <LinkItem
              underline="none"
              className={`${classes.link} active `}
              href=""
            >
              Builder
            </LinkItem>
            <LinkItem underline="none" className={classes.link} href="">
              Login
            </LinkItem>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
