import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import useStyles from "./styles";

const Payments = () => {
  const classes = useStyles();

  const [methods, setMethods] = React.useState([
    {
      id: 1,
      title: "Kartu Kredit",
      icon: <CreditCardIcon />,
      selected: true,
    },
  ]);

  const handleSelect = value => {
    const methodsIndex = methods.findIndex(el => el.id === value);

    const selected = {
      ...methods[methodsIndex],
      selected: !methods[methodsIndex].selected ? true : false,
    };

    const disabled = methods
      .filter(el => el.id !== value)
      .map(element => {
        return {
          ...element,
          selected: false,
        };
      });
    const newArray = [selected, ...disabled].sort((a, b) =>
      a.id < b.id ? -1 : Number(a.id > b.id)
    );
    setMethods(newArray);
  };

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Typography variant="caption">Pilih metode pembayaran anda</Typography>
        <br />
        <br />
        {methods.map(method => {
          return (
            <Button
              key={method.id}
              className={`${classes.button} ${method.selected && "active"}`}
              startIcon={method.icon}
              // onClick={() => handleSelect(method.id)}
            >
              {method.title}
              {method.selected ? (
                <span className={classes.labelSelected}>
                  <DoneIcon fontSize="small" />
                </span>
              ) : null}
            </Button>
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default Payments;
