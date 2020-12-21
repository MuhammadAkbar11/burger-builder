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
  handleCancelled: PropTypes.func,
  handleContinue: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    transition: ".5s all ease-in-out",
  },
  content: {
    backgroundColor: theme.palette.dark,
    borderRadius: "none",
    "& > *": {
      color: theme.palette.light,
    },
  },
  title: {
    paddingLeft: theme.spacing(0),
    "& > *": {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
  },
}));

const OrderModal = props => {
  const { open, handleCancelled, title, children, handleContinue } = props;
  const classes = useStyles();

  const handleClose = () => {
    handleCancelled();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        maxWidth={"md"}
        aria-labelledby="max-width-dialog-title"
        className={classes.root}
      >
        <DialogContent className={classes.content}>
          <DialogTitle className={classes.title} id="max-width-dialog-title">
            {title}
          </DialogTitle>
          <DialogContentText component="div">{children}</DialogContentText>
          <DialogActions>
            <Button color="primary" variant="outlined" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
            >
              Continue
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
