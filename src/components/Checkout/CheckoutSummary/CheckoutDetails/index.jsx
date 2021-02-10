import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";

const CheckoutDetails = () => {
  const classes = useStyles();

  const [count, setCount] = React.useState(1);

  const handleCounter = type => {
    if (type === "plus") {
      setCount(prevState => prevState + 1);
    } else {
      setCount(prevState => {
        let update;
        if (prevState > 1) {
          update = prevState - 1;
        } else {
          update = prevState;
        }
        setCount(update);
      });
    }
  };

  return (
    <Box className={classes.root}>
      <Card variant="outlined" className={classes.cardOrderDetail}>
        <CardHeader
          title="Detail pemesanan"
          titleTypographyProps={{
            variant: "h6",
          }}
          className={classes.cardOrderDetailHeader}
        />
        <CardContent>
          <Box>
            <Typography
              className={`${classes.textSlateLight} ${classes.cardContentTitle}`}
            >
              Burgers
            </Typography>

            <div className={`${classes.flex}`}>
              <div className={`${classes.flexItem}`}>
                <Typography>Qty</Typography>
              </div>
              <div className={`${classes.flexItem} ${classes.counter}`}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleCounter("minus")}
                  className={classes.button}
                  disabled={count < 2 ? true : false}
                >
                  -
                </Button>
                <TextField
                  size="small"
                  variant="outlined"
                  className={classes.inputCounter}
                  value={count}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => handleCounter("plus")}
                >
                  +
                </Button>
              </div>
            </div>

            {[
              {
                ingredient: "Bread Top",
                qty: 1,
                priceTotal: 3500,
              },
              {
                ingredient: "Bread Bottom",
                qty: 1,
                priceTotal: 3500,
              },
              {
                ingredient: "Meat",
                qty: 2,
                priceTotal: 3000,
              },
            ].map((item, i) => {
              return (
                <div key={i} className={`${classes.flex}`}>
                  <div className={`${classes.flexItem}`}>
                    {item.ingredient} x{item.qty}{" "}
                  </div>
                  <div className={`${classes.flexItem} ${classes.ingredients}`}>
                    {" "}
                    Rp. {item.priceTotal}
                  </div>
                </div>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CheckoutDetails;
