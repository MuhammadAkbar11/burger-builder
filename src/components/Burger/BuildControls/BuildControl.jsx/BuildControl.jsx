import React from "react";
import PropTypes from "prop-types";

import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      lineHeight: "2rem",
    },
  },

  labelContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: theme.spacing(2),
  },
  label: {
    textAlign: "left",
    marginTop: "9px",
    marginLeft: ".1rem",
    color: "#f5f5f5",
    fontSize: "0.9rem",
  },
  labelPrice: {
    marginLeft: "5px",
    fontSize: "0.85rem",
    color: "#8C8C8C",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },
  ml4: {
    marginLeft: "4px",
  },
  buttonAdd: {
    marginLeft: theme.spacing(2),
  },
  img: {
    width: 38,

    [theme.breakpoints.down("sm")]: {
      width: 55,
    },
  },
}));

const BuildControl = props => {
  const className = useStyles();

  const tomatoIcon = (
    <div>
      <img className={className.img} src={props.icon} alt="" />
      <img
        className={`${className.img} ` + className.ml4}
        src={props.icon}
        alt=""
      />
    </div>
  );

  const icon = <img width="120" src={props.icon} alt="" />;

  return (
    <div className={className.root}>
      <Box className={`${className.labelContent}`}>
        {props.type === "tomato" ? tomatoIcon : icon}
        <div className={className.label}>
          <Typography component="span">{props.label} : </Typography>
          <Typography component="small" className={className.labelPrice}>
            Rp. {props.price}
          </Typography>{" "}
        </div>
      </Box>
      <Box className={`${className.actions} `}>
        <Button
          size="small"
          onClick={props.remove}
          className={`less ${props.disabled ? "disabled" : ""}`}
          color="primary"
          variant="outlined"
        >
          <RemoveIcon />
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={className.buttonAdd}
          onClick={props.added}
        >
          <AddIcon />{" "}
        </Button>
      </Box>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string.isRequired,
  added: PropTypes.func,
  remove: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BuildControl;
