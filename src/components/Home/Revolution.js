import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import background from "../../assets/repeatingBackground.svg";
import LearnBtn from "../ui/LearnBtn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  },
  root: {
    textAlign: "center",
    padding: "5rem 10rem",
    boxShadow: theme.shadows[10],
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      padding: "5rem 2rem",
    },
  },
  center: {
    justifyContent: "center",
  },
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const maches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      className={classes.background}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" color="primary">
              The Revolution
            </Typography>
            <Typography color="textSecondary" align="justify">
              Visionary insights coupled with cutting-edge technology is a
              {maches ? null : <br />} recipe for revolution.
            </Typography>
          </CardContent>
          <CardActions className={classes.center}>
            <LearnBtn
              color={theme.palette.primary.main}
              to="/revolution"
              onClick={() => props.setValue(2)}
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Revolution;
