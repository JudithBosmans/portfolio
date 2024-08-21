import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Slides from "./components/Sketches";
import Creative from "./components/Creative";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
