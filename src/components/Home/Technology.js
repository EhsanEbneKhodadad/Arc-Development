import React, { Fragment, useEffect, useRef } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Lottie from "lottie-web";
import animation from "../../animations/landinganimation/data";
import LearnBtn from "../ui/LearnBtn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    margin: "0 0 0 auto",
    width: "400px",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
      height: "250px",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    margin: "15px",
  },
  center: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: "2rem",
    },
  },
}));

const Technology = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const container = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return (
    <Fragment>
      <Grid item>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          className={classes.center}
        >
          <Grid item md={4} sm={8}>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item>
                <Typography variant="h6" color="primary">
                  Bringing West Coast Technology to the Midwest
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.estimate}
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue(false)}
                >
                  Free Estimate
                </Button>
                <LearnBtn
                  color={theme.palette.primary.main}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={4}>
            <div ref={container} className={classes.right} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Technology;
