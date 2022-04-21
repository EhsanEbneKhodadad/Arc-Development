import React, { Fragment } from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import LearnBtn from "../ui/LearnBtn";
import mobile from "../../assets/mobile.svg";

const useStyles = makeStyles((theme) => ({
  right: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
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

const AppDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <Grid item className={classes.right}>
        <Grid container alignItems="center">
          <Grid item md={8} xs={9}>
            <Typography variant="h6" color="primary" gutterBottom>
              iOS/Android App Development
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Integrate your web experience or create a standalone app with
              either mobile platform.
            </Typography>
            <LearnBtn
              color={theme.palette.primary.main}
              to="/mobile-apps"
              onClick={() => {
                props.setValue(1);
                props.setMenuIndex(2);
              }}
            />
          </Grid>
          <Grid item md={2} xs={3}>
            <img alt="Mobile" src={mobile} className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default AppDevelopment;
