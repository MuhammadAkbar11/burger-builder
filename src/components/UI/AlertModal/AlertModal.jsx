import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  makeStyles,
  Typography,
} from "@material-ui/core";

import AlertIcon from "./AlertIcon";

const defaultProps = {
  type: "success",
  show: false,
};

const proptypes = {
  type: PropTypes.string,
  show: PropTypes.bool,
};

const useStyles = makeStyles(theme => {
  return {
    root: {},
    content: {
      backgroundColor: theme.palette.dark,
      borderRadius: "none",
      "& > *": {
        textAlign: "center",
        color: theme.palette.light,
      },
    },
    actions: {
      display: "flex",
      justifyContent: "center",
    },

    title: {
      fontWeight: "bold",
    },
  };
});

const AlertModal = props => {
  const { show, type, title, subtitle, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog open={show} fullWidth maxWidth={"sm"}>
      <DialogContent className={classes.content}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <AlertIcon type={type} />
        </div>
        <DialogContentText component="div">
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginBottom: "1.5rem", color: "lightgray" }}
          >
            {subtitle}
          </Typography>
        </DialogContentText>
        <DialogActions className={classes.actions}>
          <Button onClick={onClose} color="primary" variant="contained">
            Ok
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

AlertModal.defaultProps = defaultProps;

AlertModal.propTypes = proptypes;

export default AlertModal;
