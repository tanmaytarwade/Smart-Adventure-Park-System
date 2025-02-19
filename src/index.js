// import React from "react";
// //import "./css/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import projectroute from "./projectrout";

// // console.log(React);
// // console.log(ReactDOM);

// const result = ReactDOM.createRoot(document.getElementById("root"));

// // result.render(<App />);

// result.render(<RouterProvider router={projectroute} />);

//----------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";  // Ensure it works with React 18+
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for responsiveness
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import projectroute from "./projectrout";

// Ensure proper root selection
const rootElement = document.getElementById("root");

// Create a root if React 18 is being used
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={projectroute} />);
} else {
  console.error("Root element not found. Make sure you have a <div id='root'></div> in your index.html.");
}
