import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './OfferPage.css'; // Import CSS for styling

const offers = [
  {
    title: 'Family Package Deal',
    description: 'Get 20% off for families with 4 or more members.',
  },
  {
    title: 'Student Discount',
    description: '15% discount for students with valid ID.',
  },
  {
    title: 'Weekend Adventure Special',
    description: 'Free meal voucher with every weekend booking.',
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


