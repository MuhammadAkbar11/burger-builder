import { makeStyles } from "@material-ui/core";
import { CheckCircleOutline, HighlightOffOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    marginBottom: 16,
    fontSize: "7rem",
    textAlign: "center",
    "&.success": {
      color: theme.palette.success.main,
    },
    "&.error": {
      color: theme.palette.danger.main,
    },
  },
}));
const AlertIcon = props => {
  const { type } = props;
  const classes = useStyles();
  let icon;

  switch (type) {
    case "success":
      icon = (
        <CheckCircleOutline
          fontSize="large"
          className={`${classes.root} ${type} `}
        />
      );
      break;
    case "error":
      icon = (
        <HighlightOffOutlined
          fontSize="large"
          className={`${classes.root} ${type}`}
        />
      );
      break;
    default:
      break;
  }

  return icon;
};

export default AlertIcon;
