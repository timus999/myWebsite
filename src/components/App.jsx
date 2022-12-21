import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = () => {
  return (
    <main className="min-h-screen mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </main>
  );
};

export default App;
