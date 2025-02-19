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
import LoginPage from "./components/LoginPage";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage";
import AdminDashboard from "./components/AdminDashboard";
import Gallery from "./components/Gallery";
import UserDashboard from "./components/UserDashboard";
import TimeAllocationPage from "./components/TimeAllocationPage";
import PaymentRedirect from "./components/PaymentRedirect";
import WeatherBasedActivityRecommendation from "./components/WeatherBasedActivityRecommendation";


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
        path: "activity/:id", // Dynamic route for activity details
        element: <ActivityDetail />,
      },
      {
        path: "ActivityDescriptionPage",
        element: <ActivityDescriptionPage />,
      },
      {
        path: "OfferPage",
        element: <OfferPage />,
      },
      {
        path: "EventCalendarPage",
        element: <EventCalendarPage />,
      },
      {
        path: "RegistrationPage",
        element: <RegistrationPage />,
      },
      {
        path: "LoginPage",
        element: <LoginPage />,
      },
      {
        path: "BookingPage",
        element: <BookingPage />,
      },
      {
        path: "MapPage",
        element: <MapPage />,
      },
      {
        path: "ReviewPage",
        element: <ReviewPage />,
      },
      {
        path: "TermsAndConditionsPage",
        element: <TermsAndConditionsPage />,
      },
      {
        path: "AdminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "UserDashboard",
        element: <UserDashboard />,
        children: [
          {
            path: "booking", // Nested route for BookingPage
            element: <BookingPage />,
          },
          {
            path: "time-allocation", // Nested route for TimeAllocationPage
            element: <TimeAllocationPage />,
          },
          {
            path: "WeatherBasedActivityRecommendation", // Nested route for TimeAllocationPage
            element: <WeatherBasedActivityRecommendation />,
          },
        ],
      },
      {
        path: "payment-redirect",
        element: <PaymentRedirect />,
      },

    ],
  },
]);

export default projectroute;
