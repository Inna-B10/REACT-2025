import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
/**
 * CSS Stylsheets are sensitive
 * to the seequence they are applied in.
 * Here we are importing globaly applicable
 * stylesheets.
 * Be wary of using classes from these in components
 * as then you would have to include these files if they
 * ever are copied over to other projects.
 */
import "./styles/overrides.css";
import "./styles/palettes.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
