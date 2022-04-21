import React, { Fragment } from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import LearnBtn from "../ui/LearnBtn";
import website from "../../assets/website.svg";
const useStyles = makeStyles((theme) => ({
  margin: {
    padding: "5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
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
          <Grid item md={4} xs={9}>
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
          <Grid item md={2} xs={3}>
            <img alt="Website" src={website} className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default WebsiteDevelopment;
