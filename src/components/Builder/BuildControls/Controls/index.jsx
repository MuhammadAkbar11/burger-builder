import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import BuildControl from "../Control/index.jsx";
import useStyles from "./styles.jsx";
import { Add, Remove } from "@material-ui/icons";
import BurgerIngredients from "../../../Burger/BurgerIngredients/BurgerIngredients.jsx";
import formatRupiah from "../../../../utils/formatRupiah.js";

const defaultProps = {
  type: "tabletUp",
};

const proptypes = {
  type: PropTypes.oneOf(["tabletUp", "tabletDown"]),
};

const Controls = props => {
  const { type, ingredientCtrls, onAdd, onRemove, ingredients } = props;

  const classes = useStyles();

  const [ingredientType, setIngredientType] = React.useState({
    type: "",
    label: "",
    price: "",
  });

  let disabledInfo = ingredientCtrls
    .map(ctl => ctl.type)
    .reduce((ac, a) => {
      const exits = ingredients.filter(item => item.ingredient === a);

      let data = {
        ...ac,
        [a]: {
          disabled: exits.length <= 0,
          total: exits.length,
        },
      };
      return data;
    }, {});

  let contents = (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {ingredientCtrls.map((item, i) => {
        return (
          <div key={i}>
            <BuildControl
              added={() => onAdd(item.type)}
              remove={() => onRemove(item.type)}
              icon={item.img}
              label={item.label}
              type={item.type}
              price={item.price}
              disabled={disabledInfo[item.type].disabled}
              total={disabledInfo[item.type].total}
            />
          </div>
        );
      })}
    </Box>
  );

  if (type === "tabletDown") {
    const isEmpty = ingredientType.type.trim() === "";

    const handleIngredientType = (type, label, price, total) => {
      return setIngredientType(prevState => ({
        ...prevState,
        type,
        label,
        price,
      }));
    };

    let tabletDownContent = (
      <Box width="100%">
        <Card className={classes.cardAlert} variant="outlined">
          <CardContent>
            <Typography variant="body1" align="center" color="primary">
              Select the ingredient bellow
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );

    if (!isEmpty) {
      tabletDownContent = (
        <React.Fragment>
          <Box flex={1} display="flex" justifyContent="center">
            <Button
              size="large"
              color="primary"
              variant="contained"
              className={classes.btnCounters}
              onClick={() => onRemove(ingredientType.type)}
              disabled={disabledInfo[ingredientType.type].disabled}
            >
              <Remove />
            </Button>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <div>
              <BurgerIngredients type={ingredientType.type} />
            </div>
          </Box>

          <Box flex={1} display="flex" justifyContent="center">
            <Button
              className={classes.btnCounters}
              size="large"
              color="primary"
              variant="contained"
              onClick={() => {
                onAdd(ingredientType.type);
              }}
            >
              {" "}
              <Add />{" "}
            </Button>
          </Box>
        </React.Fragment>
      );
    }

    contents = (
      <React.Fragment>
        <Box height={40} display="flex" justifyContent="center">
          {tabletDownContent}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={2}
          className={classes.ingredientBoxLabel}
        >
          <Typography className={`price`}>{ingredientType.label}</Typography>
          <span>{formatRupiah(ingredientType.price)}</span>
        </Box>
        <Grid container spacing={2} className={classes.gridContainer}>
          {ingredientCtrls.map((ctl, i) => {
            const classActive = ctl.type === ingredientType ? "active" : "";
            const elevation = ctl.type === ingredientType ? 0 : 2;

            return (
              <Grid item xs={6} sm={3} key={i} className={classes.gridItem}>
                <Paper
                  elevation={elevation}
                  onClick={() =>
                    handleIngredientType(
                      ctl.type,
                      ctl.label,
                      ctl.price,
                      disabledInfo[ctl.type].total
                    )
                  }
                  className={`${classes.paperActions} ${classActive}`}
                >
                  <Box
                    display="flex"
                    flexGrow={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BurgerIngredients type={ctl.type} />
                  </Box>
                  <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-end"
                  >
                    <Typography
                      className={classes.paperActionsLabel}
                      align="center"
                    >
                      {ctl.label}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }

  return contents;
};

Controls.defaultProps = defaultProps;

Controls.propTypes = proptypes;

export default Controls;
