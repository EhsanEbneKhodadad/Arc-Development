import { Fragment, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Layout = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Fragment>
      <Header
        value={props.value}
        setValue={props.setValue}
        menuIndex={props.menuIndex}
        setMenuIndex={props.setMenuIndex}
      />
      {props.children}
      <Footer setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
    </Fragment>
  );
};

export default Layout;
