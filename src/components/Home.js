import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './HomePage.css'; // Import the CSS file

// Import images
import zipliningImage from '../assets/ziplining.jpg';
import rockclimbingImage from '../assets/rockclimbing.jpg';
import kayakingImage from '../assets/kayaking.jpg';
import obstaclecourseImage from '../assets/obstaclecourse.jpg';

const attractions = [
  {
    id: 1,
    name: 'Zip-Lining',
    description: 'Experience the thrill of soaring through the trees.',
    image: zipliningImage,
  },
  {
    id: 2,
    name: 'Rock Climbing',
    description: 'Challenge yourself with our indoor and outdoor climbing walls.',
    image: rockclimbingImage,
  },
  {
    id: 3,
    name: 'Kayaking',
    description: 'Paddle through our scenic waterways and enjoy nature.',
    image: kayakingImage,
  },
  {
    id: 4,
    name: 'Obstacle Course',
    description: 'Test your skills on our challenging obstacle course.',
    image: obstaclecourseImage,
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to the Smart Adventure Park!</h1>
        <p>Your adventure awaits!</p>
        <Link to="/BookingPage" className="btn">Book Now</Link> {/* Use Link for navigation */}
      </header>

      {/* Attractions Section */}
      <section className="attractions">
        <h2>Main Attractions</h2>
        <div className="attraction-list">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="attraction-card">
              <img src={attraction.image} alt={attraction.name} className="attraction-image" />
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
              <Link to={`/activity/${attraction.id}`} className="btn">Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
