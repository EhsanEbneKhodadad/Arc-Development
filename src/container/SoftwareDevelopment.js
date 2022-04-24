import React, { useEffect, useRef } from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import Estimate from "../components/Home/Estimate";
import Lottie from "lottie-web";
import bulb from "../assets/bulb.svg";
import stopwatch from "../assets/stopwatch.svg";
import cash from "../assets/cash.svg";
import root from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem",
  },
  margin: {
    margin: "1rem 0",
  },
  firstIcon: {
    textAlign: "right",
  },
  secondIcon: {
    marginLeft: "auto",
    padding: "5px",
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
  },
  iconBtn: {
    padding: "5px",
  },
  secondContainer: {
    margin: "5rem 0",
  },
  animation: {
    width: "150px",
    height: "150px",
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
  rootImg: {
    width: "550px",
    height: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "300px",
      marginTop: "3rem",
    },
  },
}));

const SoftwareDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const documentContainer = useRef();
  const scaleContainer = useRef();
  const automationContainer = useRef();
  const uxContainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: documentContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: documentsAnimation,
    });
    Lottie.loadAnimation({
      container: scaleContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: scaleAnimation,
    });
    Lottie.loadAnimation({
      container: automationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: automationAnimation,
    });
    Lottie.loadAnimation({
      container: uxContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: uxAnimation,
    });
  }, []);

  return (
    <Grid>
      <Grid item container direction="column" className={classes.marginTop}>
        {/******************************************** first section ********************************************/}
        <Grid item container>
          <Grid item xs={1} className={classes.firstIcon}>
            <IconButton
              component={Link}
              to="/services"
              className={classes.iconBtn}
              onClick={() => {
                props.setValue(1);
                props.setMenuIndex(0);
              }}
            >
              <ArrowBackIcon fontSize="small" color="primary" />
            </IconButton>
          </Grid>
          <Grid container item md={5} xs={10} direction="column">
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                className={classes.margin}
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                className={classes.margin}
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                className={classes.margin}
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                className={classes.margin}
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} className={classes.secondIcon}>
            <IconButton
              component={Link}
              to="/mobile-apps"
              className={classes.iconBtn}
              onClick={() => {
                props.setValue(1);
                props.setMenuIndex(2);
              }}
            >
              <ArrowForwardIcon fontSize="small" color="primary" />
            </IconButton>
          </Grid>
        </Grid>
        {/******************************************** second section ********************************************/}
        <Grid item container className={classes.secondContainer}>
          <Grid
            item
            container
            direction="column"
            xs={4}
            alignItems={matches ? "center" : "flex-end"}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img alt="Bulb" src={bulb} className={classes.img} />
            </Grid>
          </Grid>
          <Grid container item direction="column" xs={4} alignItems="center">
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img alt="Stopwatch" src={stopwatch} className={classes.img} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={4}
            alignItems={matches ? "center" : "flex-start"}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img alt="Cash" src={cash} className={classes.img} />
            </Grid>
          </Grid>
        </Grid>
        {/******************************************** third section ********************************************/}
        <Grid item container>
          <Grid
            item
            container
            md={6}
            className={classes.padding}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item container direction="column" sm={8}>
              <Grid item>
                <Typography variant="h6" color="primary" paragraph>
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="textSecondary" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  paragraph
                  align="justify"
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  paragraph
                  align="justify"
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <div ref={documentContainer} className={classes.animation} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={6}
            className={classes.padding}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item container sm={8}>
              <Grid item>
                <Typography variant="h6" color="primary">
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align="justify"
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <div ref={scaleContainer} className={classes.animation} />
            </Grid>
          </Grid>
        </Grid>
        {/******************************************** fourth section ********************************************/}
        <Grid item container direction="column" alignItems="center">
          <Grid item className={classes.rootImg}>
            <img src={root} alt="root" />
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.margin}
          >
            <Grid item sm={4} xs={8}>
              <Typography variant="h6" color="primary" paragraph>
                Root-Cause Analysis
              </Typography>
            </Grid>
            <Grid item sm={4} xs={8}>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
            </Grid>
            <Grid item sm={4} xs={8}>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/******************************************** fifth section ********************************************/}
        <Grid item container>
          <Grid
            item
            container
            md={6}
            className={classes.padding}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item container direction="column" sm={8}>
              <Grid item>
                <Typography variant="h6" color="primary" paragraph>
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="textSecondary" paragraph>
                  Why waste time when you don’t have to?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  paragraph
                  align="justify"
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  paragraph
                  align="justify"
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <div ref={automationContainer} className={classes.animation} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={6}
            className={classes.padding}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item container sm={8}>
              <Grid item>
                <Typography variant="h6" color="primary">
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align="justify"
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align="justify"
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  align="justify"
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <div ref={uxContainer} className={classes.animation} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex}/>
      </Grid>
    </Grid>
  );
};

export default SoftwareDevelopment;
