import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

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
            element={<div style={{ height: "100rem" }}>Home</div>}
          />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/custom-software" element={<div>Custom Software</div>} />
          <Route path="/mobile-apps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>Revolution</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          menuIndex={menuIndex}
          setMenuIndex={setMenuIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
