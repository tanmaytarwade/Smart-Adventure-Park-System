import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Header.css'; // Importing the CSS for styling the Header
function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
       
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ActivityDescriptionPage">
              ActivityDescription
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/OfferPage">
              OfferPage
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/EventCalendarPage">
              EventCalendar
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/RegistrationPage">
              Registration
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/BookingPage">
              Booking 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MapPage">
              Map
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ReviewPage">
              ReviewPage
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;