import React from "react";
import ReactDOM from "react-dom/client";

import './node_modules/bootstrap/dist/css/bootstrap.css';
import './node_modules/bootstrap-icons/font/bootstrap-icons.css';

import YupValidationComponent from "./src/components/YupValidationComponent";





const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(
       <>
              <YupValidationComponent/>
       </>
       
);