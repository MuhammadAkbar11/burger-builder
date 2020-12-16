import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.main,
  },
}));

const Spinner = props => {
  const classes = useStyles();
  return (
    <Backdrop open={props.open} className={classes.backdrop}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Spinner;
