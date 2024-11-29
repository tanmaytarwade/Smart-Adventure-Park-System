// src/components/ActivityDescriptionPage.js

import React from 'react';
import './ActivityDescriptionPage.css'; // Import the internal CSS
import zipliningImage from '../assets/ziplining.jpg';
import rockclimbingImage from '../assets/rockclimbing.jpg';
import kayakingImage from '../assets/kayaking.jpg';
import obstaclecourseImage from '../assets/obstaclecourse.jpg';

// Sample data for the activities
const activities = [
  {
    id: 1,
    name: 'Zip-Lining',
    description: 'Experience the thrill of soaring through the trees on our zip-lining adventure.',
    image: zipliningImage,
    details: 'Our zip-lining course features multiple lines that span across beautiful landscapes, offering breathtaking views and an adrenaline rush. Each session is guided by experienced instructors to ensure safety and fun.',
    benefits: [
      'Adrenaline-pumping experience',
      'Stunning views of nature',
      'Professional guidance and safety measures',
    ],
  },
  {
    id: 2,
    name: 'Rock Climbing',
    description: 'Challenge yourself with our indoor and outdoor climbing walls.',
    image: rockclimbingImage,
    details: 'Our rock climbing facilities offer various routes for all skill levels. Join our expert instructors for a safe and thrilling climbing experience.',
    benefits: [
      'Build strength and endurance',
      'Fun for all ages',
      'Expert instructors available',
    ],
  },
  {
    id: 3,
    name: 'Kayaking',
    description: 'Paddle through our scenic waterways and enjoy nature.',
    image: kayakingImage,
    details: 'Explore our beautiful waterways with our kayaking tours. Perfect for families and adventure seekers!',
    benefits: [
      'Great for family outings',
      'Explore nature up close',
      'Relaxing and fun experience',
    ],
  },
  {
    id: 4,
    name: 'Obstacle Course',
    description: 'Test your skills on our challenging obstacle course.',
    image: obstaclecourseImage,
    details: 'Our obstacle course is designed for all ages and skill levels. Come and challenge yourself with friends and family!',
    benefits: [
      'Team-building experience',
      'Physical fitness challenge',
      'Fun for groups and individuals',
    ],
  },
];

const ActivityDescriptionPage = () => {
  return (
    <div className="activity-description-page">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <header className="activity-header">
            <h1>{activity.name}</h1>
            <img src={activity.image} alt={activity.name} />
          </header>
          <section className="activity-description">
            <h2>Description</h2>
            <p>{activity.description}</p>
            <h2>Details</h2>
            <p>{activity.details}</p>
            <h2>Benefits</h2>
            <ul>
              {activity.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ActivityDescriptionPage;