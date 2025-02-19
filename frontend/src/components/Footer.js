// import React from 'react';
// import './Footer.css'; // Import the CSS for styling

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section about">
//           <h3>About Us</h3>
//           <p>
//             Welcome to the Smart Adventure Park! We provide thrilling adventures and unforgettable experiences for visitors of all ages. Explore, enjoy, and challenge yourself!
//           </p>
//         </div>

//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/ActivityDescriptionPage">Activities</a></li>
//             <li><a href="/BookingPage">Booking</a></li>
//             <li><a href="/MapPage">Contact Us</a></li>
//             <li><a href="/ReviewPage">Reviews</a></li>
//           </ul>
//         </div>

//         <div className="footer-section contact">
//           <h3>Contact Us</h3>
//           <p><strong>Email:</strong> support@smartadventurepark.com</p>
//           <p><strong>Phone:</strong> +1 123-456-7890</p>
//           <p><strong>Address:</strong> 123 Adventure Park Rd, Funville, USA</p>
//         </div>

//         <div className="footer-section social">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Smart Adventure Park. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

//----------------------------------------------
import React from "react";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Welcome to the Smart Adventure Park! We provide thrilling adventures
            and unforgettable experiences for visitors of all ages. Explore,
            enjoy, and challenge yourself!
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ActivityDescriptionPage">Activities</a>
            </li>
            <li>
              <a href="/BookingPage">Booking</a>
            </li>
            <li>
              <a href="/MapPage">Contact Us</a>
            </li>
            <li>
              <a href="/ReviewPage">Reviews</a>
            </li>
            <li>
              <a href="/TermsAndConditionsPage">Terms&Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong> support@smartadventurepark.com
          </p>
          <p>
            <strong>Phone:</strong> 9370543455
          </p>
          <p>
            <strong>Address:</strong> CJP+QWH, Nashik - Shirdi Rd, near JKD
            Hotel, Chandekasare, Maharashtra 423601
          </p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Smart Adventure Park. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
