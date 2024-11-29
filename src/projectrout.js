import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import ActivityDetail from "./components/ActivityDetail";
import ActivityDescriptionPage from "./components/ActivityDescriptionPage";


//http://localhost:3000/ --> Home
//http://localhost:3000/loginpage --> Login
const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "activity/:id",  // Dynamic route for activity details
  element: <ActivityDetail />,

      },
      {
        path:"ActivityDescriptionPage",
        element:<ActivityDescriptionPage/>
      }
    ],
  },
]);

export default projectroute;