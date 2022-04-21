import React, { Fragment } from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import LearnBtn from "../ui/LearnBtn";
import software from "../../assets/software.svg";
const useStyles = makeStyles((theme) => ({
  margin: {
    padding: "0 5rem",
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

const SoftwareDevelopment = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <Grid item className={classes.margin}>
        <Grid container>
          <Grid item md={4} xs={9}>
            <Typography variant="h6" color="primary">
              Custom Software Development
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.span}>celebration</span>.
            </Typography>
            <LearnBtn
              color={theme.palette.primary.main}
              to="/custom-software"
              onClick={() => {
                props.setValue(1);
                props.setMenuIndex(1);
              }}
            />
          </Grid>
          <Grid item md={2} xs={3}>
            <img alt="Software" src={software} className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SoftwareDevelopment;
