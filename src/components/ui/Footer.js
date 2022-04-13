import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { services, revolution, about } from "../../data/data";
import { makeStyles, Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { useTheme } from "@material-ui/core";
import footerLogo from "../../assets/Footer Adornment.svg";

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
      {services.map((item, index) =>
        // create services lists and don't use 'services'
        index !== 0 ? (
          <Grid
            item
            component={Link}
            to={item.link}
            onClick={() => {
              props.setValue(item.selecte);
              props.setMenuIndex(item.selecte);
            }}
            className={classes.footerLink}
          >
            {item.name}
          </Grid>
        ) : null
      )}
    </Fragment>
  );

  const revolutionItems = (
    <Fragment>
      {revolution.map((item, index) =>
        index !== 0 ? (
          <Grid
            item
            component={Link}
            to={item.link}
            onClick={() => props.setValue(item.active)}
            className={classes.footerLink}
          >
            {item.name}
          </Grid>
        ) : null
      )}
    </Fragment>
  );

  const aboutItems = (
    <Fragment>
      {about.map((item, index) =>
        index !== 0 ? (
          <Grid
            item
            component={Link}
            to={item.link}
            onClick={() => props.setValue(item.active)}
            className={classes.footerLink}
          >
            {item.name}
          </Grid>
        ) : null
      )}
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
