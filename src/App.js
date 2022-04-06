import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/custom-software" element={<div>Custom Software</div>}/>
          <Route path="/mobile-apps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>Revolution</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
