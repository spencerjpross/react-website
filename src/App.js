import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/portfolio"
            element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/about"
            element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/contact"
            element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
