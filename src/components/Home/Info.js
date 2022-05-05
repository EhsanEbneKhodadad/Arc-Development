import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import background from "../../assets/infoBackground.svg";
import LearnBtn from "../ui/LearnBtn";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "100vh",
  },
  typography: {
    color: "#fff",
  },
  alignRight: {
    textAlign: "right",
    paddingRight: "3rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  paddingL: {
    paddingLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));
const Info = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justifyContent="center"
    >
      <Grid sm item>
        <Grid container>
          <Grid item className={classes.paddingL}>
            <Typography variant="h3" className={classes.typography}>
              About Us
            </Typography>
            <Typography variant="h6" className={classes.typography}>
              Let’s get personal.
            </Typography>
            <LearnBtn
              color="white"
              to="/about"
              onClick={() => props.setValue(3)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm className={classes.contact}>
        <Grid container justifyContent="flex-end">
          <Grid item className={classes.alignRight}>
            <Typography variant="h3" className={classes.typography}>
              Contact Us
            </Typography>
            <Typography variant="h6" className={classes.typography}>
              Say hello! 👋🏻.
            </Typography>
            <LearnBtn
              color="white"
              to="/contact"
              onClick={() => props.setValue(4)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Info;
