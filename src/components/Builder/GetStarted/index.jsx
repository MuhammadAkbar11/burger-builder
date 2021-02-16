import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";
import useStyles from "./styles";
import { Redirect, useHistory } from "react-router-dom";

const GetStarted = props => {
  const classes = useStyles();

  const { isStarted } = props;
  const history = useHistory();

  const [burgerName, setBurgerName] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const submitHandler = () => {
    setLoading(true);

    props.onSetBurgerName(burgerName);
    setBurgerName("");
    setLoading(false);
    history.push("/builder");
  };

  let content = (
    <React.Fragment>
      <Box my={2}>
        {" "}
        <Typography variant="h3" align="center" color="primary">
          Build your own burger{" "}
        </Typography>
      </Box>
      <Typography variant="h6" className={classes.title}>
        Your burger Name?
      </Typography>
      <div className={classes.form}>
        <TextField
          size="medium"
          fullWidth
          onChange={e => setBurgerName(e.target.value)}
        />
        <Button
          size="medium"
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={submitHandler}
          disabled={burgerName.trim() === "" ? true : false}
        >
          Let's build
        </Button>
      </div>
    </React.Fragment>
  );

  if (loading) {
    content = (
      <div className={classes.loader}>
        <LoopIcon style={{ fontSize: 70 }} />
      </div>
    );
  }

  return isStarted ? (
    <Box className={classes.root}>{content}</Box>
  ) : (
    <Redirect to="/builder" />
  );
};

export default GetStarted;
