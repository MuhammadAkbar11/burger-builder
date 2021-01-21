import React from "react";
import PropTypes from "prop-types";

import { Box, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./styles";

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
          disabled={props.disabled}
          className={className.button}
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