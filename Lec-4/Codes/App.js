import React from "react";
import ReactDOM from "react-dom/client";

const container = <h1>Good Morning</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(container);