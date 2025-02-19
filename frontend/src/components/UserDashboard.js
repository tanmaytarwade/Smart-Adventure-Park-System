// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./UserDashboard.css"; // Add CSS for styling

// const UserDashboard = () => {
//   return (
//     <div className="user-dashboard">
//       <header className="dashboard-header">
//         <h1>Welcome to Your Dashboard</h1>
//         <nav className="dashboard-nav">
//           <Link to="/UserDashboard/booking" className="nav-link">
//             Booking
//           </Link>
//           <Link to="/UserDashboard/time-allocation" className="nav-link">
//             Time Allocation
//           </Link>
//         </nav>
//       </header>
//       <main className="dashboard-content">
//         <Outlet /> {/* This will render the nested routes (BookingPage, TimeAllocationPage) */}
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

//-------------------------------------------------

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import "./UserDashboard.css"; // Add CSS for styling

// const UserDashboard = () => {
//   return (
//     <div className="user-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Dashboard</h2>
//         <nav className="sidebar-nav">
//           <NavLink
//             to="/UserDashboard/booking"
//             className="nav-link"
//             activeClassName="active"
//           >
//             Booking
//           </NavLink>
//           <NavLink
//             to="/UserDashboard/time-allocation"
//             className="nav-link"
//             activeClassName="active"
//           >
//             Time Allocation
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         <Outlet /> {/* This will render the nested routes (BookingPage, TimeAllocationPage) */}
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

//------------------------------------------

// import React from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import TermsAndConditionsPage from "./TermsAndConditionsPage"; // Import the TermsAndConditionsPage
// import "./UserDashboard.css"; // Add CSS for styling

// const UserDashboard = () => {
//   const location = useLocation(); // Get the current route location

//   // Check if the current route is a nested route (Booking or Time Allocation)
//   const isNestedRoute =
//     location.pathname.includes("/UserDashboard/booking") ||
//     location.pathname.includes("/UserDashboard/time-allocation") ||
//     location.pathname.includes("/UserDashboard/WeatherBasedActivityRecommendation");

//   return (
//     <div className="user-dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>Dashboard</h2>
//         <nav className="sidebar-nav">
//           <NavLink
//             to="/UserDashboard/booking"
//             className="nav-link"
//             activeClassName="active"
//           >
//             Booking
//           </NavLink>
//           <NavLink
//             to="/UserDashboard/time-allocation"
//             className="nav-link"
//             activeClassName="active"
//           >
//             Time Allocation
//           </NavLink>
//           <NavLink
//             to="/UserDashboard/WeatherBasedActivityRecommendation"
//             className="nav-link"
//             activeClassName="active"
//           >
//             WeatherBased Activity Recommendation
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="dashboard-content">
//         {/* Render the nested routes (BookingPage or TimeAllocationPage) */}
//         <Outlet />

//         {/* Render Terms and Conditions only if no nested route is active */}
//         {!isNestedRoute && <TermsAndConditionsPage />}
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

//------------------------------------------------
import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import TermsAndConditionsPage from "./TermsAndConditionsPage"; // Import the TermsAndConditionsPage
import "./UserDashboard.css"; // Add CSS for styling

const UserDashboard = () => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // For redirection

  // Check if the current route is a nested route (Booking or Time Allocation)
  const isNestedRoute =
    location.pathname.includes("/UserDashboard/booking") ||
    location.pathname.includes("/UserDashboard/time-allocation") ||
    location.pathname.includes("/UserDashboard/WeatherBasedActivityRecommendation");

  // Logout function
  const handleLogout = () => {
    // Clear user session (if stored in localStorage/sessionStorage)
    localStorage.removeItem("userToken"); // Remove stored user token (if applicable)
    navigate("/LoginPage"); // Redirect to Login Page
  };

  return (
    <div className="user-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Dashboard</h2>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <nav className="sidebar-nav">
          <NavLink
            to="/UserDashboard/booking"
            className="nav-link"
            activeClassName="active"
          >
            Booking
          </NavLink>
          <NavLink
            to="/UserDashboard/time-allocation"
            className="nav-link"
            activeClassName="active"
          >
            Time Allocation
          </NavLink>
          <NavLink
            to="/UserDashboard/WeatherBasedActivityRecommendation"
            className="nav-link"
            activeClassName="active"
          >
            WeatherBased Activity Recommendation
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Render the nested routes (BookingPage or TimeAllocationPage) */}
        <Outlet />

        {/* Render Terms and Conditions only if no nested route is active */}
        {!isNestedRoute && <TermsAndConditionsPage />}
      </main>
    </div>
  );
};

export default UserDashboard;
