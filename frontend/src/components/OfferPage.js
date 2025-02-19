

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./OfferPage.css"; // Import the updated CSS
// import CollegeFunbaazi from "../assets/College-Funbaazi.jpg";
// import familyimage from "../assets/family.jpg";
// import bird from "../assets/Early-Bird-_Card.jpg";
// import holidayimg from "../assets/hoilday.jpg";
// import groupimg from "../assets/group.jpg";
//  import coupleimg from "../assets/couple.jpg"; // Add new image
//  import seasonalimg from "../assets/seasonal.jpg"; // Add new image
//  import corporateimg from "../assets/corporate.jpg"; // Add new image

// const offers = [
//   {
//     title: "Family Package Deal",
//     description: "Get 20% off for families with 4 or more members.",
//     imagePath: familyimage,
//   },
//   {
//     title: "Student Discount",
//     description: "15% discount for students with valid ID.",
//     imagePath: CollegeFunbaazi,
//   },
//   {
//     title: "Weekend Adventure Special",
//     description: "Free meal voucher with every weekend booking.",
//     imagePath: holidayimg,
//   },
//   {
//     title: "Early Bird Offer",
//     description: "Book 7 days in advance and get a 10% discount.",
//     imagePath: bird,
//   },
//   {
//     title: "Group Adventure Bonus",
//     description: "Special discounts for groups of 10 or more.",
//     imagePath: groupimg,
//   },
//   {
//     title: "Couple Getaway",
//     description: "Romantic packages for couples with a free photo session.",
//     imagePath: coupleimg,
//   },
//   {
//     title: "Seasonal Special",
//     description: "Enjoy 25% off on all seasonal activities.",
//     imagePath: seasonalimg,
//   },
//   {
//     title: "Corporate Retreat",
//     description: "Customized packages for corporate teams.",
//     imagePath: corporateimg,
//   },
// ];

// const ageGroupActivities = {
//   children: ["Mini Obstacle Course", "Kids Kayaking", "Nature Walk"],
//   teens: ["Zip-Lining", "Rock Climbing", "Adventure Challenges"],
//   adults: ["Kayaking", "Obstacle Course", "Team Building Activities"],
//   seniors: ["Nature Walk", "Relaxation Zones", "Light Kayaking"],
// };

// const OfferPage = () => {
//   const [age, setAge] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   const suggestActivities = () => {
//     if (age < 13) setSuggestions(ageGroupActivities.children);
//     else if (age >= 13 && age < 18) setSuggestions(ageGroupActivities.teens);
//     else if (age >= 18 && age < 60) setSuggestions(ageGroupActivities.adults);
//     else setSuggestions(ageGroupActivities.seniors);
//   };

//   return (
//     <div className="offer-page">
//       <header className="offer-header">
//         <h1>Explore Our Exclusive Offers</h1>
//         <p>Unlock amazing deals and plan your next adventure with us!</p>
//       </header>

//       <section className="offers-grid">
//         {offers.map((offer, index) => (
//           <div key={index} className="offer-card">
//             <img
//               src={offer.imagePath}
//               alt={offer.title}
//               className="offer-image"
//             />
//             <div className="offer-content">
//               <h2>{offer.title}</h2>
//               <p>{offer.description}</p>
//               <Link to="/LoginPage">
//                 <button className="book-button">Book Now</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="activity-suggestions">
//         <h2>Find Activities Tailored for You</h2>
//         <div className="age-input-container">
//           <input
//             type="number"
//             placeholder="Enter your age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="age-input"
//           />
//           <button onClick={suggestActivities} className="suggest-button">
//             Get Suggestions
//           </button>
//         </div>
//         {suggestions.length > 0 && (
//           <div className="suggestion-list">
//             <h3>Recommended Activities:</h3>
//             <ul>
//               {suggestions.map((activity, index) => (
//                 <li key={index}>{activity}</li>
//               ))}
//             </ul>
//             <Link to="/ActivityDescriptionPage">
//               <button className="info-button">Learn More</button>
//             </Link>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default OfferPage;

//------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OfferPage.css";
import CollegeFunbaazi from "../assets/College-Funbaazi.jpg";
import familyimage from "../assets/family.jpg";
import bird from "../assets/Early-Bird-_Card.jpg";
import holidayimg from "../assets/hoilday.jpg";
import groupimg from "../assets/group.jpg";
import coupleimg from "../assets/couple.jpg";
import seasonalimg from "../assets/seasonal.jpg";
import corporateimg from "../assets/corporate.jpg";

const offers = [
  { title: "Family Package Deal", description: "Get 20% off for families with 4 or more members.", imagePath: familyimage },
  { title: "Student Discount", description: "15% discount for students with valid ID.", imagePath: CollegeFunbaazi },
  { title: "Weekend Adventure Special", description: "Free meal voucher with every weekend booking.", imagePath: holidayimg },
  { title: "Early Bird Offer", description: "Book 7 days in advance and get a 10% discount.", imagePath: bird },
  { title: "Group Adventure Bonus", description: "Special discounts for groups of 10 or more.", imagePath: groupimg },
  { title: "Couple Getaway", description: "Romantic packages for couples with a free photo session.", imagePath: coupleimg },
  { title: "Seasonal Special", description: "Enjoy 25% off on all seasonal activities.", imagePath: seasonalimg },
  { title: "Corporate Retreat", description: "Customized packages for corporate teams.", imagePath: corporateimg },
];

const randomImages = [familyimage, CollegeFunbaazi, bird, holidayimg, groupimg, coupleimg, seasonalimg, corporateimg];

const OfferPage = () => {
  const [fetchedOffers, setFetchedOffers] = useState([]);
  const [age, setAge] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/api/offers/all")
      .then((response) => response.json())
      .then((data) => {
        const offersWithImages = data.map((offer, index) => ({
          ...offer,
          imagePath: randomImages[index % randomImages.length], // Assign random images cyclically
        }));
        setFetchedOffers(offersWithImages);
      })
      .catch((error) => console.error("Error fetching offers:", error));
  }, []);

  const ageGroupActivities = {
    children: ["Mini Obstacle Course", "Kids Kayaking", "Nature Walk"],
    teens: ["Zip-Lining", "Rock Climbing", "Adventure Challenges"],
    adults: ["Kayaking", "Obstacle Course", "Team Building Activities"],
    seniors: ["Nature Walk", "Relaxation Zones", "Light Kayaking"],
  };

  const suggestActivities = () => {
    if (age < 13) setSuggestions(ageGroupActivities.children);
    else if (age >= 13 && age < 18) setSuggestions(ageGroupActivities.teens);
    else if (age >= 18 && age < 60) setSuggestions(ageGroupActivities.adults);
    else setSuggestions(ageGroupActivities.seniors);
  };

  return (
    <div className="offer-page">
      <header className="offer-header">
        <h1>Explore Our Exclusive Offers</h1>
        <p>Unlock amazing deals and plan your next adventure with us!</p>
      </header>

      <section className="offers-grid">
        {[...offers, ...fetchedOffers].map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.imagePath} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
              <Link to="/LoginPage">
                <button className="book-button">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="activity-suggestions">
        <h2>Find Activities Tailored for You</h2>
        <div className="age-input-container">
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="age-input"
          />
          <button onClick={suggestActivities} className="suggest-button">Get Suggestions</button>
        </div>
        {suggestions.length > 0 && (
          <div className="suggestion-list">
            <h3>Recommended Activities:</h3>
            <ul>
              {suggestions.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <Link to="/ActivityDescriptionPage">
              <button className="info-button">Learn More</button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default OfferPage;