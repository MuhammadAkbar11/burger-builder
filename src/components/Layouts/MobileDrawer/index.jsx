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

const MobileDrawer = props => {
  const classes = useStyles();

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
        {["Home", "Builder", "Account"].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Orders", "Cart", "Logout"].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemText primary={text} />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpen: () => dispatch({ type: AppActionTypes.OPEN_MOBILE_DRAWER }),
    onClose: () => dispatch({ type: AppActionTypes.CLOSE_MOBILE_DRAWER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDrawer);
