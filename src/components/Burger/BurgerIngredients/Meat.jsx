import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import meatSvg from "../../../assets/svg/meat.svg";

const useStyles = makeStyles(theme => ({
  img: {
    position: "relative",
    zIndex: 5,
    position: "relative",
  },
}));

const Meat = () => {
  const meatClass = useStyles();
  return (
    <CardMedia component="img" className={meatClass.img} image={meatSvg} />
  );
};

export default Meat;
