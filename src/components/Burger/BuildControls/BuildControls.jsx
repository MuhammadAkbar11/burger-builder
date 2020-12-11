import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  styled,
} from "@material-ui/core";
import BuildControl from "./BuildControl.jsx/BuildControl";

import meatImg from "../../../assets/svg/meat.svg";
import saladImg from "../../../assets/svg/seeds.svg";
import tomatoImg from "../../../assets/svg/tomato-left.svg";
import cheeseImg from "../../../assets/svg/cheese.svg";

const controls = [
  {
    label: "Salad",
    type: "salad",
    img: saladImg,
    price: 6000,
  },
  {
    label: "Meat",
    type: "meat",
    img: meatImg,
    price: 12000,
  },
  {
    label: "Tomato",
    type: "tomato",
    img: tomatoImg,
    price: 3000,
  },
  {
    label: "Cheese",
    type: "cheese",
    img: cheeseImg,
    price: 5000,
  },
];

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "4rem",
      paddingTop: theme.spacing(14),
    },
    [theme.breakpoints.down("md")]: {
      paddingBottom: "4rem",
      paddingTop: theme.spacing(4),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",

    [theme.breakpoints.only("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "4rem",
    },
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    [theme.breakpoints.only("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
}));

const CheckoutButton = styled(Button)({
  backgroundColor: "#f5b316",
  color: "#212121",
  marginLeft: "15px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  marginTop: "2rem",

  "&:hover": {
    backgroundColor: "#f5b216c9",
  },
  "&:active, &:focus": {
    backgroundColor: "#f5b216c9",
  },

  "&:disabled": {
    transform: "scale(0.9)",
    color: "f2f2f2",
    backgroundColor: "#f5b216c9",
  },
});

const BuildControls = props => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Box className={classes.controls}>
          {controls.map((item, index) => {
            return (
              <div>
                <BuildControl
                  added={() => props.ingredientAdded(item.type)}
                  remove={() => props.ingredientRemove(item.type)}
                  key={`${item.label}${index + 1}`}
                  icon={item.img}
                  label={item.label}
                  type={item.type}
                  price={item.price}
                  disabled={props.disabled[item.type]}
                />
              </div>
            );
          })}
        </Box>
        <CheckoutButton
          onClick={props.ordered}
          size="large"
          variant="contained"
          disabled={!props.purchase ? true : false}
        >
          Order now!
        </CheckoutButton>
      </Paper>
    </Container>
  );
};

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemove: PropTypes.func,
  disabled: PropTypes.object,
  purchase: PropTypes.bool,
  ordered: PropTypes.func,
};

export default BuildControls;
