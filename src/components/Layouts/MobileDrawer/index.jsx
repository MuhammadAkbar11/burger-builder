import React from "react";
import { Box, Drawer } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ChevronRight } from "@material-ui/icons";
import useStyles from "./styles";
import { AppActionTypes } from "../../../store/actions/types";
import { connect } from "react-redux";
import useActiveClass from "../../../hooks/useActiveClass";
import { useHistory } from "react-router-dom";

const MobileDrawer = props => {
  const classes = useStyles();

  const activeClass = useActiveClass({
    activeClass: "active",
  });

  const history = useHistory();

  const drawer = (
    <Box fontSize={18} px={1}>
      <Box
        px={1}
        display="flex"
        alignItems="center"
        className={classes.toolbar}
      >
        <IconButton className={classes.toggle} onClick={props.onClose}>
          <ChevronRight />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {props.menu.map((menu, index) => (
          <ListItem
            button
            key={index}
            onClick={() => history.push(menu.url)}
            classes={{
              root: classes.listItem,
            }}
            className={` ${activeClass(menu.match)} `}
          >
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      classes={{
        paper: classes.paper,
      }}
      open={props.open}
    >
      {drawer}
    </Drawer>
  );
};

const mapStateToProps = state => {
  return {
    open: state.app.isOpenDrawer,
    menu: state.app.menu,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpen: () => dispatch({ type: AppActionTypes.OPEN_MOBILE_DRAWER }),
    onClose: () => dispatch({ type: AppActionTypes.CLOSE_MOBILE_DRAWER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDrawer);
