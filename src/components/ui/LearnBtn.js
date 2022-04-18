import { Button, makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";

const LearnBtn = (props) => {
  const useStyles = makeStyles((theme) => ({
    btn: {
      borderRadius: "50px",
      textTransform: "none",
      color: props.color,
      border: `1px solid ${props.color}`,
    },
  }));

  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.btn} component={Link} to={props.to} onClick={props.onClick}>
      Learn more
      <ArrowForwardIcon fontSize="small" />
    </Button>
  );
};

export default LearnBtn;
