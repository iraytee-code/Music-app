import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// allows us to override the default name BrowserRouter
//which comes from react-router-dom and is used to wrap App.js
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 
    Router wraps App.js and allows us to use the react-router-dom
    */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
