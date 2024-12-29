


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './OfferPage.css'; // Import CSS for styling
import CollegeFunbaazi from '../assets/College-Funbaazi.jpg';
import familyimage from '../assets/family.jpg';
import bird from '../assets/Early-Bird-_Card.jpg';
import holidayimg from '../assets/hoilday.jpg';
import groupimg from '../assets/group.jpg';

const offers = [
  {
    title: 'Family Package Deal',
    description: 'Get 20% off for families with 4 or more members.',
    imagePath:familyimage,
  },
  {
    title: 'Student Discount',
    description: '15% discount for students with valid ID.',
    imagePath: CollegeFunbaazi, // Replace with your image path
  },
  {
    title: 'Weekend Adventure Special',
    description: 'Free meal voucher with every weekend booking.',
    imagePath: holidayimg, // Replace with your image path
  },
  {
    title: 'Early Bird Offer',
    description: 'Book 7 days in advance and get a 10% discount.',
    imagePath: bird, // Replace with your image path
  },
  {
    title: 'Group Adventure Bonus',
    description: 'Special discounts for groups of 10 or more.',
    imagePath:groupimg, // Replace with your image path
  },
];

const ageGroupActivities = {
  children: ['Mini Obstacle Course', 'Kids Kayaking', 'Nature Walk'],
  teens: ['Zip-Lining', 'Rock Climbing', 'Adventure Challenges'],
  adults: ['Kayaking', 'Obstacle Course', 'Team Building Activities'],
  seniors: ['Nature Walk', 'Relaxation Zones', 'Light Kayaking'],
};

const OfferPage = () => {
  const [age, setAge] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const suggestActivities = () => {
    if (age < 13) setSuggestions(ageGroupActivities.children);
    else if (age >= 13 && age < 18) setSuggestions(ageGroupActivities.teens);
    else if (age >= 18 && age < 60) setSuggestions(ageGroupActivities.adults);
    else setSuggestions(ageGroupActivities.seniors);
  };

  return (
    <div className="offer-page">
      <h1>Special Offers & Promotions</h1>
      <section className="offers">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img
              src={offer.imagePath}
              alt={offer.title}
              className="offer-image"
            />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
            <Link to="/BookingPage">
              <button className="book-button">Book Now</button>
            </Link>
          </div>
        ))}
      </section>

      <section className="activity-suggestions">
        <h2>Find Activities Based on Your Age</h2>
        <div className="age-input">
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={suggestActivities}>Get Suggestions</button>
        </div>
        {suggestions.length > 0 && (
          <div className="suggestion-list">
            <h3>Recommended Activities:</h3>
            <ul>
              {suggestions.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default OfferPage;


