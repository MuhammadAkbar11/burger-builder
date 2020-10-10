import React from "react";
import TomatoLeft from "../../../assets/svg/tomato-left.svg";
import TomatoRight from "../../../assets/svg/tomato-right.svg";

import { Box, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  box: {
    width: "100%",
    display: "flex",
    zIndex: "2",
  },
  img: {
    width: "50%",
  },
}));
const Tomato = props => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <CardMedia
        className={classes.img}
        component="img"
        image={TomatoLeft}
        alt=""
      />
      <CardMedia
        className={classes.img}
        component="img"
        image={TomatoRight}
        alt=""
      />
    </Box>
  );
};

export default Tomato;
