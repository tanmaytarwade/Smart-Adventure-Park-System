
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.css"; // Importing the CSS for styling the Header

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          MyApp
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ActivityDescriptionPage">
                Activity Description
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OfferPage">
                Offer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/EventCalendarPage">
                Event Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LoginPage">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MapPage">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

//------------------------------------------------
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; // Importing the CSS for styling

// function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-custom">
//       <div className="container-fluid">
//         {/* Brand Name */}
//         <Link className="navbar-brand" to="/">
//           Smart Adventure Park
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/ActivityDescriptionPage">Activity Description</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/OfferPage">Offers</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/EventCalendarPage">Event Calendar</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Gallery">Gallery</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/MapPage">Map</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link btn-login" to="/LoginPage">Login</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
