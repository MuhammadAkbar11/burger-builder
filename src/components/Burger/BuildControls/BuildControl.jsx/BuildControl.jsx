import React from "react";
import PropTypes from "prop-types";

import { Button, makeStyles, styled, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: theme.spacing(2),
    width: "100%",
  },
  label: {
    // color: "#DAE1E7",
    display: "flex",
    justifyContent: "flex-start",

    flex: 1,
    "& span": {
      marginLeft: ".9rem",
      color: "#f5f5f5",
      fontSize: "0.9rem",
    },
  },
}));

const ButtonControlAdd = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  marginLeft: "15px",
  "&:hover": {
    backgroundColor: "#f5b216c9",
  },
  "&:active, &:focus": {
    backgroundColor: "#f5b216c9",
  },
});

const ButtonControlLess = styled(Button)({
  // backgroundColor: "#5d5d5a",
  border: "1px solid #f5b316",
  color: "#f5b316",

  "&:hover": {
    backgroundColor: "#f5b316",
    color: "#f2f2f2",
    // backgroundColor: "#70706fea",
  },
  "&:active, &:focus": {
    color: "#f2f2f2",
    backgroundColor: "#f5b316",
  },
});

const BuildControl = props => {
  const className = useStyles();
  return (
    <div className={className.root}>
      <div className={className.label}>
        {/* <Typography component="span">{props.label}</Typography> */}
        <img width="80" src={props.icon} alt="" />
        <Typography component="span">{props.label}</Typography>
      </div>
      <div>
        <ButtonControlLess className="less" color="primary">
          Less
        </ButtonControlLess>
        <ButtonControlAdd color="primary">More</ButtonControlAdd>
      </div>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default BuildControl;
