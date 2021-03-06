import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import theme from "./components/ui/Theme";
import Home from "./container/Home";
import Services from "./container/Services";
import SoftwareDevelopment from "./container/SoftwareDevelopment";
import AppDevelopment from "./container/AppDevelopment";
import Websites from "./container/Websites";
import Revolution from "./container/Revolution";
import About from "./container/About";
import Contact from "./container/Contact";
import Estimate from "./container/Estimate";

function App() {
  // set active tabs
  const [value, setValue] = useState(0);
  // set selected menu index
  const [menuIndex, setMenuIndex] = useState();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout
          value={value}
          setValue={setValue}
          menuIndex={menuIndex}
          setMenuIndex={setMenuIndex}
        >
          <Routes>
            <Route
              path="/"
              element={<Home setValue={setValue} setMenuIndex={setMenuIndex} />}
            />
            <Route
              path="/services"
              element={
                <Services setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
            <Route
              path="/custom-software"
              element={
                <SoftwareDevelopment
                  setValue={setValue}
                  setMenuIndex={setMenuIndex}
                />
              }
            />
            <Route
              path="/mobile-apps"
              element={
                <AppDevelopment
                  setValue={setValue}
                  setMenuIndex={setMenuIndex}
                />
              }
            />
            <Route
              path="/websites"
              element={
                <Websites setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
            <Route
              path="/revolution"
              element={
                <Revolution setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
            <Route
              path="/about"
              element={
                <About setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
            <Route
              path="/estimate"
              element={
                <Estimate setValue={setValue} setMenuIndex={setMenuIndex} />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
