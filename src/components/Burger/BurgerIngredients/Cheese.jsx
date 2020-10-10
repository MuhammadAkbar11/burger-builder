import React from "react";
import cheese from "../../../assets/svg/cheese.svg";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    marginBottom: "-2px",
  },
}));

const Cheese = props => {
  const cheeseClass = useStyle();

  return (
    <CardMedia component="img" className={cheeseClass.root} image={cheese} />
  );
};

export default Cheese;
