import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import Home from "./components/Home.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
