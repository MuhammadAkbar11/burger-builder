import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const defaultProps = {
  title: "Modal Title",
  children: null,
};

const proptypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    backgroundColor: theme.palette.dark,
    borderRadius: "none",
    "& > *": {
      color: theme.palette.light,
    },
  },
  title: {
    fontSize: "1.3rem",
    paddingLeft: theme.spacing(0),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.dark,
    "&:hover, &:active, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const OrderModal = props => {
  const { open, onClose, title, children } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <React.Fragment>
      <Dialog
        BackdropProps={false}
        open={open}
        // onClose={handleClose}
        maxWidth={"md"}
        aria-labelledby="max-width-dialog-title"
        className={classes.root}
      >
        <DialogContent className={classes.content}>
          <DialogTitle className={classes.title} id="max-width-dialog-title">
            {title}
          </DialogTitle>
          <DialogContentText>{children}</DialogContentText>
          <DialogActions>
            <Button className={classes.button} onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

OrderModal.defaultProps = defaultProps;

OrderModal.propTypes = proptypes;

export default OrderModal;
