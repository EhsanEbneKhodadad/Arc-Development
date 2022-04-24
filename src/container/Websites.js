import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import PageInfo from "../components/ui/PageInfo";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem",
  },
}));

const Websites = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item container className={classes.marginTop}>
        {/******************************************** first section ********************************************/}
        <PageInfo>
          <Grid item>
            <Typography variant="h6" color="primary" gutterBottom>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="textSecondary" align="justify" paragraph>
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="textSecondary" align="justify" paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.{" "}
            </Typography>
          </Grid>
        </PageInfo>
      </Grid>
    </Grid>
  );
};

export default Websites;
