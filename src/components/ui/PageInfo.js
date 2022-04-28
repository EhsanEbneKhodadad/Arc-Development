import React from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  firstIcon: {
    textAlign: "right",
  },
  iconBtn: {
    padding: "5px",
  },
  margin: {
    margin: "1rem 0",
  },
  secondIcon: {
    marginLeft: "auto",
    padding: "5px",
  },
}));
const PageInfo = (props) => {
  const classes = useStyles();
  return (
    <Grid item container>
      <Grid item xs={1} className={classes.firstIcon}>
        <IconButton
          component={Link}
          to={props.before.link}
          className={classes.iconBtn}
          onClick={() => {
            props.setValue(props.before.active);
            props.setMenuIndex(props.before.selecte);
          }}
        >
          <ArrowBack fontSize="small" color="primary" />
        </IconButton>
      </Grid>
      <Grid container item md={5} xs={10} direction="column">
        <Grid item>{props.children}</Grid>
      </Grid>
      <Grid item xs={1} className={classes.secondIcon}>
        <IconButton
          component={Link}
          to={props.after.link}
          className={classes.iconBtn}
          onClick={() => {
            props.setValue(props.after.active);
            props.setMenuIndex(props.after.selecte);
          }}
        >
          <ArrowForward fontSize="small" color="primary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default PageInfo;
