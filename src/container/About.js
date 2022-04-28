import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Estimate from "../components/Home/Estimate";
import history from "../assets/history.svg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  center: {
    alignSelf: "center",
    margin: "3rem",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  history: {
    margin: "0 0 0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  padding: {
    padding: "0 1rem",
  },
}));

const About = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      {/******************************************** section ********************************************/}
      <Grid item container direction="column" className={classes.marginTop}>
        <Grid item>
          <Typography variant="h6" color="primary">
            About Us
          </Typography>
        </Grid>
        <Grid item sm={8} className={classes.center}>
          <Typography variant="body2" color="primary" align="justify">
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={classes.marginTop} alignItems="center">
        <Grid item container direction="column" md={5}>
          <Grid item>
            <Typography variant="h6" color="primary" gutterBottom>
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" paragraph>
              We’re the new kid on the block.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              All this change can be a lot to keep up with, and that’s where we
              come in.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={5} xs={8} className={classes.history}>
          <img src={history} alt="history" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container direction="column" className={classes.marginTop}>
        <Grid item>
          <Typography variant="h6" color="primary">
            Team
          </Typography>
        </Grid>
        <Grid item container style={{ marginTop: "4rem" }}>
          <Grid
            item
            container
            md
            direction="column"
            alignItems="center"
            className={classes.padding}
          >
            <Grid item>
              <img src={yearbook} alt="yearbook" className={classes.img} />
            </Grid>
            <Grid item>
              <Typography variant="caption" color="textSecondary">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item container md direction="column" style={{ margin: "2rem" }}>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            md
            direction="column"
            alignItems="center"
            className={classes.padding}
          >
            <Grid item>
              <img src={puppy} alt="puppy" className={classes.img} />
            </Grid>
            <Grid item>
              <Typography variant="caption" color="textSecondary">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item>
        <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
      </Grid>
    </Grid>
  );
};

export default About;
