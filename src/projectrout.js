import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import ActivityDetail from "./components/ActivityDetail";
import ActivityDescriptionPage from "./components/ActivityDescriptionPage";
import OfferPage from "./components/OfferPage";
import EventCalendarPage from "./components/EventCalendarPage";
import RegistrationPage from "./components/RegistrationPage";
import BookingPage from "./components/BookingPage";
import MapPage from "./components/MapPage";
import ReviewPage from "./components/ReviewPage";



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
      },
      {
        path:"OfferPage",
        element:<OfferPage/>
      },
      {
        path:"EventCalendarPage",
        element:<EventCalendarPage/>
      },
      {
        path:"RegistrationPage",
        element:<RegistrationPage/>
      },
      {
        path:"BookingPage",
        element:<BookingPage/>
      },
      {
        path:"MapPage",
        element:<MapPage/>
      },
      {
        path:"ReviewPage",
        element:<ReviewPage/>
      },
    ],
  },
]);

export default projectroute;