import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import LearnBtn from "../components/ui/LearnBtn";
import mobile from "../assets/mobile.svg";
import software from "../assets/software.svg";
import website from "../assets/website.svg";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem 7rem",
    minHeight: "90vh",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
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
  item: {
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" justifyContent='space-around' className={classes.marginTop}>
      <Grid item>
        <Typography variant="h3" color="primary">
          Services
        </Typography>
      </Grid>
      {/* App Development */}
      <Grid
        container
        justifyContent={matches ? "center" : "flex-end"}
        className={classes.item}
      >
        <Grid item md={4} xs={9}>
          <Typography variant="h5" color="primary" gutterBottom>
            iOS/Android App Development
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
            Integrate your web experience or create a standalone app with either
            mobile platform.
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
        <Grid item md={2} xs={3} style={{ paddingLeft: 20 }}>
          <img alt="Mobile" src={mobile} className={classes.img} />
        </Grid>
      </Grid>
      {/* software */}
      <Grid
        container
        justifyContent={matches ? "center" : "flex-start"}
        className={classes.item}
      >
        <Grid item md={4} xs={9}>
          <Typography variant="h5" color="primary">
            Custom Software Development
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
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
      {/* Website Development */}
      <Grid
        container
        justifyContent={matches ? "center" : "flex-end"}
        className={classes.item}
      >
        <Grid item md={4} xs={9}>
          <Typography variant="h5" color="primary">
            Website Development
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
            Reach More. Discover More. Sell more.
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            align="justify"
          >
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
  );
};

export default Services;
