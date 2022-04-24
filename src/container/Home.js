import React from "react";
import { Grid } from "@material-ui/core";
import Technology from "../components/Home/Technology";
import SoftwareDevelopment from "../components/Home/SoftwareDevelopment";
import AppDevelopment from "../components/Home/AppDevelopment";
import WebsiteDevelopment from "../components/Home/WebsiteDevelopment";
import Revolution from "../components/Home/Revolution";
import Info from "../components/Home/Info";
import Estimate from "../components/Home/Estimate";

const Home = (props) => {
  return (
    <div>
      <Grid container direction="column">
        <Technology
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
        />
        <SoftwareDevelopment
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
        />
        <AppDevelopment
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
        />
        <WebsiteDevelopment
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
        />
        <Revolution
          setValue={props.setValue}
          setMenuIndex={props.setMenuIndex}
        />
        <Info setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
        <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
      </Grid>
    </div>
  );
};

export default Home;
