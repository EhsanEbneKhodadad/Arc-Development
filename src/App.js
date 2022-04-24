import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./container/Home";
import Services from "./container/Services";
import SoftwareDevelopment from "./container/SoftwareDevelopment";
import AppDevelopment from "./container/AppDevelopment";

function App() {
  // set active tabs
  const [value, setValue] = useState(0);
  // set selected menu index
  const [menuIndex, setMenuIndex] = useState();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          menuIndex={menuIndex}
          setMenuIndex={setMenuIndex}
        />
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
              <AppDevelopment setValue={setValue} setMenuIndex={setMenuIndex} />
            }
          />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>Revolution</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer setValue={setValue} setMenuIndex={setMenuIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
