import React, { useEffect, useRef } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Lottie from "lottie-web";
import PageInfo from "../components/ui/PageInfo";
import Estimate from "../components/Home/Estimate";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import extendAccess from "../assets/extendAccess.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";
import swissKnife from "../assets/swissKnife.svg";
import { services } from "../data/data";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem",
  },
  padding: {
    padding: "7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 2rem",
    },
  },
  divContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      height: "40%",
      margin: "auto",
    },
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "150px",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "5rem 0",
    },
  },
  extendAccess: {
    width: "100%",
    height: "100%",
  },
}));

const AppDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const animationContainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: integrationAnimation,
    });
  }, []);
  return (
    <Grid container direction="column">
      <Grid item container direction="column" className={classes.marginTop}>
        {/******************************************** first section ********************************************/}
        <PageInfo
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
          before={services[1]}
          after={services[3]}
        >
          <Grid item>
            <Typography variant="h6" color="primary" gutterBottom>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="textSecondary" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="textSecondary" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </PageInfo>
        {/******************************************** second section ********************************************/}
        <Grid item container alignItems="center" justifyContent="center">
          <Grid
            item
            container
            direction="column"
            md={5}
            className={classes.padding}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <div ref={animationContainer} className={classes.divContainer} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={5}
            className={classes.padding}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/******************************************** third section ********************************************/}
        <Grid item container className={classes.padding}>
          <Grid
            item
            container
            md
            direction="column"
            alignItems={matches ? "center" : undefined}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src={swissKnife} alt="swissKnife" className={classes.img} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.imgContainer}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={extendAccess}
                alt="extendAccess"
                className={classes.extendAccess}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md
            direction="column"
            alignItems={matches ? "center" : "flex-end"}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={increaseEngagement}
                alt="increaseEngagement"
                className={classes.img}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
      </Grid>
    </Grid>
  );
};

export default AppDevelopment;
