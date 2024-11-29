import React from "react";
//import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import projectroute from "./projectrout";

// console.log(React);
// console.log(ReactDOM);

const result = ReactDOM.createRoot(document.getElementById("root"));

// result.render(<App />);

result.render(<RouterProvider router={projectroute} />);
