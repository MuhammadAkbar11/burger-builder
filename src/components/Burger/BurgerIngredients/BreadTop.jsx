import { Card, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";
import breadTop from "../../../assets/svg/bread-top.svg";

const BreadTop = props => {
  return <CardMedia component="img" image={breadTop} />;
};

export default BreadTop;
