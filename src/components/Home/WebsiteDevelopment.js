import React, { Fragment } from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import LearnBtn from "../ui/LearnBtn";
import website from "../../assets/website.svg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "0 5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
    },
  },
  span: {
    color: theme.palette.secondary.main,
  },
  img: {
    width: "150px",
    height: "150px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "150px",
    },
  },
}));

const WebsiteDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <Grid item className={classes.margin}>
        <Grid container>
          <Grid item xs={8} sm={3}>
            <Typography variant="h6" color="primary">
              Website Development
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Reach More. Discover More. Sell more.
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnBtn
              color={theme.palette.primary.main}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setMenuIndex(3);
              }}
            />
          </Grid>
          <Grid item xs={4} sm={5}>
            <img alt="Website Image" src={website} className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default WebsiteDevelopment;
