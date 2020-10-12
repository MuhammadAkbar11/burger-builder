import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
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
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      backgroundColor: "#212121",
      borderBottom: "1px solid #333",
      "& > *": {
        color: "#dae1e7",
      },
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: "#dae1e7",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      fontSize: "1rem",
      "&:hover": {
        color: "#f5b316",
        opacity: "0.8",
      },
      "&.active": {
        color: "#f5b316",
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
