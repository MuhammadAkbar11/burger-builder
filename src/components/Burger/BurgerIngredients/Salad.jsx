import React from "react";
import saladSvg from "../../../assets/svg/seeds.svg";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  img: {
    marginTop: "-0.7rem",
    marginBottom: "-0.8rem",
    position: "relative",
    zIndex: 20,
  },
}));

const Salad = () => {
  const saladClass = useStyles();

  return (
    <CardMedia className={saladClass.img} component="img" image={saladSvg} />
  );
};

export default Salad;
