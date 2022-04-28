import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import PageInfo from "../components/ui/PageInfo";
import Estimate from "../components/Home/Estimate";
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";
import { services } from "../data/data";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem",
  },
  padding: {
    padding: "3rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  img: {
    width: "80%",
    height: "80%",
  },
  titleMargin: {
    marginLeft: "2rem",
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        <Grid item container className={classes.marginTop}>
          {/******************************************** first section ********************************************/}
          <PageInfo
            setValue={props.setValue}
            setMenuIndex={props.setMenuIndex}
            before={services[2]}
            after={services[0]}
          >
            <Grid item>
              <Typography variant="h6" color="primary" gutterBottom>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.{" "}
              </Typography>
            </Grid>
          </PageInfo>
        </Grid>
        {/******************************************** second section ********************************************/}
        <Grid
          item
          container
          alignItems="center"
          className={classes.padding}
          justifyContent={matches ? "center" : undefined}
        >
          <Grid item container md={3} sm={4} xs={6}>
            <Grid item className={classes.titleMargin}>
              <Typography variant="h6" color="primary" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} alt="analytics" className={classes.img} />
            </Grid>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
            >
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
        {/******************************************** third section ********************************************/}
        <Grid
          item
          container
          alignItems="center"
          className={classes.padding}
          justifyContent={matches ? "center" : "flex-end"}
        >
          <Grid item container md={3} sm={4} xs={6}>
            <Grid item className={classes.titleMargin}>
              <Typography variant="h6" color="primary" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <Grid>
                <img src={ecommerce} alt="ecommerce" className={classes.img} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" md={3} xs={6}>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                It’s no secret that people like to shop online.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/******************************************** fourth section ********************************************/}
        <Grid
          item
          container
          alignItems="center"
          className={classes.padding}
          justifyContent={matches ? "center" : undefined}
        >
          <Grid item container md={3} sm={4} xs={6}>
            <Grid item className={classes.titleMargin}>
              <Typography variant="h6" color="primary" gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="outreach" className={classes.img} />
            </Grid>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
            >
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
        {/******************************************** fivth section ********************************************/}
        <Grid
          item
          container
          alignItems="center"
          className={classes.padding}
          justifyContent={matches ? "center" : "flex-end"}
        >
          <Grid item container md={3} sm={4} xs={6}>
            <Grid item className={classes.titleMargin}>
              <Typography variant="h6" color="primary">
                Search Engine
                <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="seo" className={classes.img} />
            </Grid>
          </Grid>
          <Grid item container direction="column" md={3} xs={6}>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                How often have you ever been to the second page of Google
                results?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                If you’re like us, probably never.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary" paragraph>
                Customers don’t go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
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

export default Websites;
