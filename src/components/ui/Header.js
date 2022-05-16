import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes, services } from "../../data/data";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useScrollTrigger, Tab, Tabs, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.svg";
// for appbar
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
// custom styles
const useStyles = makeStyles((theme) => ({
  margin: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5rem",
    },
  },
  logo: {
    height: "5rem",
    [theme.breakpoints.down("md")]: {
      height: "4rem",
    },
  },
  logoBtn: {
    padding: "0",
    "&:hover": {
      background: "transparent",
    },
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    margin: "10px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    margin: "0 25px 0 50px",
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  menuIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    color: "#fff",
    width: "35px",
    height: "35px",
  },
  list: {
    width: 250,
  },
  drawerRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  listRoot: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  listRootSelected: {
    opacity: 1,
  },
  listEstimate: {
    backgroundColor: theme.palette.secondary.main,
    opacity: 1,
    ...theme.typography.estimate,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // for drawer
  const [state, setState] = useState(false);
  // for opening menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeTabsHandler = (e, value) => {
    props.setValue(value);
  };

  const toggleDrawer = () => setState(!state);

  // set active navigation after reload
  useEffect(() => {
    [...routes, ...services].forEach((item) => {
      switch (window.location.pathname) {
        case item.link:
          if (props.value !== item.active) {
            props.setValue(item.active);
          }
          if (item.selecte && props.menuIndex !== item.selecte) {
            props.setMenuIndex(item.selecte);
          }
          break;

        default:
          break;
      }
    });
    if (window.location.pathname === "/estimate") {
      props.setValue(false);
    }
  });

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={changeTabsHandler}
        className={classes.tabs}
        indicatorColor="primary"
      >
        {routes.map((item) => (
          <Tab
            key={item.name}
            className={classes.tab}
            component={Link}
            to={item.link}
            label={item.name}
            aria-controls={item.name === "Services" ? "simple-menu" : null}
            aria-haspopup={item.name === "Services" ? "true" : null}
            onMouseOver={item.name === "Services" ? handleClick : null}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        className={classes.button}
        onClick={() => props.setValue(false)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {services.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={item.link}
            onClick={() => {
              handleClose();
              props.setValue(1);
              props.setMenuIndex(index);
            }}
            classes={{ root: classes.menuItem }}
            selected={props.menuIndex === index && props.value === 1}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List disablePadding>
        {routes.map((item, index) => (
          <ListItem
            button
            key={item.name}
            component={Link}
            to={item.link}
            divider
            selected={props.value === item.active}
            onClick={() => props.setValue(item.active)}
            className={[
              props.value === item.active
                ? [classes.listRoot, classes.listRootSelected]
                : classes.listRoot,
            ]}
          >
            <ListItemText disableTypography primary={item.name} />
          </ListItem>
        ))}
        <ListItem
          button
          component={Link}
          to="/estimate"
          divider
          selected={props.value === false}
          onClick={() => props.setValue(false)}
          className={[
            classes.listRoot,
            classes.listRootSelected,
            classes.listEstimate,
          ]}
        >
          <ListItemText disableTypography primary="Free Estimate" />
        </ListItem>
      </List>
    </div>
  );

  const drawer = (
    <React.Fragment>
      <Button
        onClick={toggleDrawer}
        disableRipple
        className={classes.menuIconContainer}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{ paper: classes.drawerRoot }}
      >
        {list}
      </SwipeableDrawer>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoBtn}
              onClick={() => props.setValue(0)}
            >
              <img src={logo} alt="Logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.margin} />
    </React.Fragment>
  );
};

export default Header;
