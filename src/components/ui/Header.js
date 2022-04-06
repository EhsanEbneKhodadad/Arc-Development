import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
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
  // set active tabs
  const [value, setValue] = useState(0);
  // for opening menu
  const [anchorEl, setAnchorEl] = useState(null);
  // set selected menu index
  const [menuIndex, setMenuIndex] = useState();

  const routes = [
    {
      name: "Home",
      link: "/",
      active: 0,
    },
    {
      name: "Services",
      link: "/services",
      active: 1,
    },
    {
      name: "The Revolution",
      link: "/revolution",
      active: 2,
    },
    {
      name: "About Us",
      link: "/about",
      active: 3,
    },
    {
      name: "Contact Us",
      link: "/contact",
      active: 4,
    },
  ];
  const menus = [
    {
      name: "Services",
      link: "/services",
      active: 1,
      selecte: 0,
    },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      active: 1,
      selecte: 1,
    },
    {
      name: " Mobile Apps Development",
      link: "/mobile-apps",
      active: 1,
      selecte: 2,
    },
    {
      name: "Websites Development",
      link: "/websites",
      active: 1,
      selecte: 3,
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeTabsHandler = (e, value) => {
    setValue(value);
  };

  const toggleDrawer = () => setState(!state);

  // set active navigation after reload
  useEffect(() => {
    [...routes, ...menus].map((item) => {
      switch (window.location.pathname) {
        case item.link:
          if (value !== item.active) {
            setValue(item.active);
          }
          if (item.selecte && menuIndex !== item.selecte) {
            setMenuIndex(item.selecte);
          }
          break;

        default:
          break;
      }
    });
    if (window.location.pathname === "/estimate") {
      setValue(false);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
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
        onClick={() => setValue(false)}
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
        {menus.map((item, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={item.link}
            onClick={() => {
              handleClose();
              setValue(1);
              setMenuIndex(index);
            }}
            classes={{ root: classes.menuItem }}
            selected={menuIndex === index && value === 1}
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
            selected={value === item.active}
            onClick={() => setValue(item.active)}
            className={[
              value === item.active
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
          selected={value === false}
          onClick={() => setValue(false)}
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
              onClick={() => setValue(0)}
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
