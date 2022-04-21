import React from "react";
import { Grid } from "@material-ui/core";
import Technology from "./Technology";
import SoftwareDevelopment from "./SoftwareDevelopment";
import AppDevelopment from "./AppDevelopment";
import WebsiteDevelopment from "./WebsiteDevelopment";
import Revolution from "./Revolution";
import Info from "./Info";
import Estimate from "./Estimate";

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
