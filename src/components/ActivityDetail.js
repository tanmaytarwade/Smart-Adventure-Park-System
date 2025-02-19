import React from 'react';
import { useParams } from 'react-router-dom';
import './ActivityDetail.css';  // Ensure this file exists and styles are added

// Importing images
import ziplining from '../assets/ziplining.jpg';        // Ensure these paths are correct
import rockclimbing from '../assets/rockclimbing.jpg';
import kayaking from '../assets/kayaking.jpg';
import obstaclecourse from '../assets/obstaclecourse.jpg';

// Sample activities data array
const activities = [
  {
    id: 1,
    name: 'Zip-Lining',
    description: 'Experience the thrill of soaring through the trees on our zip-lining adventure. Perfect for thrill-seekers and nature lovers alike!',
    image: ziplining,
    details: 'Our zip-lining course features multiple lines that span across beautiful landscapes, offering breathtaking views and an adrenaline rush. Each session is guided by experienced instructors to ensure safety and fun.',
    bookingLink: '/booking',
  },
  {
    id: 2,
    name: 'Rock Climbing',
    description: 'Challenge yourself with our indoor and outdoor climbing walls.',
    image: rockclimbing,
    details: 'Our rock climbing facilities offer various routes for all skill levels. Join our expert instructors for a safe and thrilling climbing experience.',
    bookingLink: '/booking',
  },
  {
    id: 3,
    name: 'Kayaking',
    description: 'Paddle through our scenic waterways and enjoy nature.',
    image: kayaking,
    details: 'Explore our beautiful waterways with our kayaking tours. Perfect for families and adventure seekers!',
    bookingLink: '/booking',
  },
  {
    id: 4,
    name: 'Obstacle Course',
    description: 'Test your skills on our challenging obstacle course.',
    image: obstaclecourse,
    details: 'Our obstacle course is designed for all ages and skill levels. Come and challenge yourself with friends and family!',
    bookingLink: '/booking',
  },
];

// Main ActivityDetail component
const ActivityDetail = () => {
  const { id } = useParams();  // Extract the activity ID from the URL
  const activity = activities.find(activity => activity.id === parseInt(id));  // Find the matching activity by ID

  // Handle case where the activity is not found
  if (!activity) {
    return (
      <div className="error-message">
        <h2>Activity not found.</h2>
        <p>Please check the URL or return to the <a href="/">home page</a>.</p>
      </div>
    );
  }

  return (
    <div className="activity-detail">
      <header className="activity-header">
        <h1>{activity.name}</h1>
        <img src={activity.image} alt={activity.name} className="activity-image" />
      </header>
      <section className="activity-description">
        <h2>Description</h2>
        <p>{activity.description}</p>
        <h2>Details</h2>
        <p>{activity.details}</p>
        <a href={activity.bookingLink} className="btn">Book Now</a>
      </section>
    </div>
  );
};

export default ActivityDetail;


