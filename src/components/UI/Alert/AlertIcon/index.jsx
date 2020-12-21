import React from "react";
import { CheckCircleOutline, HighlightOffOutlined } from "@material-ui/icons";
import useStyles from "./styles";

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
