import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Grid, Hidden, useMediaQuery } from "@material-ui/core";
import footerLogo from "../../assets/Footer Adornment.svg";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  footerLogo: {
    width: "16rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "13rem",
    },
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "12px",
  },
  icons: {
    color: "#000",
  },
  padding: {
    [theme.breakpoints.down("md")]: {
      padding: "1rem 0.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  margin: {
    margin: "6px",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const servicesItems = (
    <Fragment>
      <Grid
        item
        component={Link}
        to="/custom-software"
        onClick={() => {
          props.setValue(1);
          props.setMenuIndex(1);
        }}
        className={classes.footerLink}
      >
        Custom Software Development
      </Grid>
      <Grid
        item
        component={Link}
        to="/mobile-apps"
        onClick={() => {
          props.setValue(1);
          props.setMenuIndex(2);
        }}
        className={classes.footerLink}
      >
        iOS/Android App Development
      </Grid>
      <Grid
        item
        component={Link}
        to="/websites"
        onClick={() => {
          props.setValue(1);
          props.setMenuIndex(3);
        }}
        className={classes.footerLink}
      >
        Website Development
      </Grid>
    </Fragment>
  );

  const revolutionItems = (
    <Fragment>
      <Grid
        item
        component={Link}
        to="/revolution"
        onClick={() => props.setValue(2)}
        className={classes.footerLink}
      >
        Vision
      </Grid>
      <Grid
        item
        component={Link}
        to="/revolution"
        onClick={() => props.setValue(2)}
        className={classes.footerLink}
      >
        Technology
      </Grid>
      <Grid
        item
        component={Link}
        to="/revolution"
        onClick={() => props.setValue(2)}
        className={classes.footerLink}
      >
        Process
      </Grid>
    </Fragment>
  );

  const aboutItems = (
    <Fragment>
      <Grid
        item
        component={Link}
        to="/about"
        onClick={() => props.setValue(3)}
        className={classes.footerLink}
      >
        Mission Statement
      </Grid>
      <Grid
        item
        component={Link}
        to="/about"
        onClick={() => props.setValue(3)}
        className={classes.footerLink}
      >
        History
      </Grid>
      <Grid
        item
        component={Link}
        to="/about"
        onClick={() => props.setValue(3)}
        className={classes.footerLink}
      >
        Team
      </Grid>
    </Fragment>
  );

  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center">
        <Hidden xsDown>
          <Grid item xs={3}>
            <div>
              <img
                className={classes.footerLogo}
                src={footerLogo}
                alt="Footer Logo"
              />
            </div>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8}>
          <Grid
            container
            justifyContent="space-between"
            className={classes.padding}
          >
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/"
                  onClick={() => props.setValue(0)}
                  className={classes.footerLink}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/services"
                  onClick={() => {
                    props.setValue(1);
                    props.setMenuIndex(0);
                  }}
                  className={classes.footerLink}
                >
                  Services
                </Grid>
                {matches ? servicesItems : null}
              </Grid>
            </Grid>
            <Grid item className={classes.footerItem}>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                  className={classes.footerLink}
                >
                  The Revolution
                </Grid>
                {matches ? revolutionItems : null}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/about"
                  onClick={() => props.setValue(3)}
                  className={classes.footerLink}
                >
                  About Us
                </Grid>
                {matches ? aboutItems : null}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  component={Link}
                  to="/contact"
                  onClick={() => props.setValue(4)}
                  className={classes.footerLink}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <a href="https://www.facebook.com" className={classes.margin}>
                <Facebook className={classes.icons} />
              </a>
              <a href="https://twitter.com" className={classes.margin}>
                <Twitter className={classes.icons} />
              </a>
              <a href="https://www.instagram.com" className={classes.margin}>
                <Instagram className={classes.icons} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
