import React from "react";
import "./App.css";
import { Home, About, Contact, Work } from "./containers";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
