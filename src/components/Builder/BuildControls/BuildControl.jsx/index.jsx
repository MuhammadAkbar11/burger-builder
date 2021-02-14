import React from "react";
import PropTypes from "prop-types";

import { Box, Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./styles";
import formatRupiah from "../../../../utils/formatRupiah";

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
  const price = formatRupiah(props.price);
  return (
    <div className={className.root}>
      <Box className={`${className.labelContent}`}>
        {props.type === "tomato" ? tomatoIcon : icon}
        <div className={className.label}>
          <Typography component="small">{props.label} : </Typography>
          <Typography component="small" className={className.labelPrice}>
            {price}
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
          variant="contained"
        >
          <RemoveIcon />
        </Button>
        <span className={className.badgeTotal}>X{props.total}</span>
        <Button
          size="small"
          variant="contained"
          color="primary"
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
  total: PropTypes.number,
};

export default BuildControl;
