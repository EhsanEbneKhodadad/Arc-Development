import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import LearnBtn from "../ui/LearnBtn";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  color: {
    color: "#fff",
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50px",
    marginLeft: "8rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    ['&:hover']:{
      background:theme.palette.secondary.dark
    }
  },
  marginLeft: {
    marginLeft: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
    },
  },
}));

const Estimate = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.background} alignItems="center">
      <Grid item md={4} sm={6} xs={8}>
        <Grid container direction="column" className={classes.marginLeft}>
          <Grid item>
            <Typography gutterBottom variant="h6" color="primary">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant="subtitle2"
              className={classes.color}
            >
              Take advantage of the
              <br /> 21st Century.
            </Typography>
          </Grid>
          <Grid item>
            <LearnBtn
              color={theme.palette.primary.main}
              to="/revolution"
              onClick={() => props.setValue(2)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={6} xs={4}>
        <Button
          className={classes.estimate}
          component={Link}
          to="/estimate"
          onClick={() => props.setValue(false)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default Estimate;
