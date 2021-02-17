import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Hidden, IconButton, Link as LinkItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import useActiveClass from "../../hooks/useActiveClass";

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
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
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

      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    },
    toggle: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

const TopBar = props => {
  const classes = useStyles();

  const activeClass = useActiveClass({
    activeClass: "active",
  });

  const onActiveClass = value => activeClass(value);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BurgerBuilder
          </Typography>
          <Box display="flex">
            <Hidden xsDown implementation="css">
              {props.menu.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <LinkItem
                      underline="none"
                      className={`${classes.link} ${onActiveClass(
                        item.match
                      )} `}
                      component={Link}
                      to={item.url}
                    >
                      {item.label}
                    </LinkItem>
                  </React.Fragment>
                );
              })}

              <LinkItem
                underline="none"
                className={`${classes.link} ${onActiveClass("login")}`}
                component="span"
              >
                Login
              </LinkItem>
            </Hidden>
            <Hidden smUp implementation="css">
              <IconButton
                className={classes.toggle}
                onClick={props.onOpenMobileDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
