//------------------------------------
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import kayakingVideo from "../assets/9445928-uhd_3840_2160_24fps.mp4";
import zipliningImage from "../assets/ziplining.jpg";
import rockclimbingImage from "../assets/rockclimbing.jpg";
import kayakingImage from "../assets/kayaking.jpg";
import obstaclecourseImage from "../assets/obstaclecourse.jpg";

const attractions = [
  {
    id: 1,
    name: "Zip-Lining",
    description: "Experience the thrill of soaring through the trees.",
    image: zipliningImage,
  },
  {
    id: 2,
    name: "Rock Climbing",
    description:
      "Challenge yourself with our indoor and outdoor climbing walls.",
    image: rockclimbingImage,
  },
  {
    id: 3,
    name: "Kayaking",
    description: "Paddle through our scenic waterways and enjoy nature.",
    image: kayakingImage,
  },
  {
    id: 4,
    name: "Obstacle Course",
    description: "Test your skills on our challenging obstacle course.",
    image: obstaclecourseImage,
  },
];

const blogs = [
  {
    title: "5 Reasons Why Adventure Parks are Perfect for Families",
    link: "https://dreamlandmunnar.in/10-reasons-to-visit-an-adventure-park-in-india/",
  },
  {
    title: "Why Adventure Parks Are the Hottest Attractions in India Right Now",
    link: "https://dreamlandmunnar.in/why-adventure-parks-are-the-hottest-attractions-in-india-right-now/",
  },
  {
    title: "Tips for Planning Outdoor Adventure activities",
    link: "https://dreamlandmunnar.in/tips-for-planning-outdoor-adventure-activities/",
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Video Section */}
      <section className="video-section">
        <div className="video-text">
          <h1>Welcome to the Arjun Adventure Park</h1>
        </div>
        <video
          className="adventure-video"
          src={kayakingVideo}
          autoPlay
          muted
          loop
        />
      </section>

      {/* Main Attractions */}
      <section className="attractions">
        <h2>Main Attractions</h2>
        <div className="attraction-list">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="attraction-card">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="attraction-image"
              />
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
              <Link to={`/activity/${attraction.id}`} className="btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers">
        <h2>Exclusive Offers</h2>
        <p>Book now and get 20% off on group bookings of 5 or more!</p>
        <Link to="/BookingPage" className="btn offer-btn">
          Book This Offer
        </Link>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <h2>About Our Adventure Park</h2>
        <p>
          Welcome to the Smart Adventure Park! Our park offers an unparalleled
          experience for adventurers of all skill levels. From exhilarating
          zip-lines to challenging obstacle courses, our attractions are
          designed to provide endless fun.
        </p>
        <ul>
          <li>
            Variety of Activities: Zip-lines, rope bridges, climbing walls, and
            obstacle courses.
          </li>
          <li>
            Safety First: Top-notch equipment checks, harnesses, and trained
            guides.
          </li>
          <li>
            Natural Beauty: Scenic locations surrounded by lush forests and
            rolling hills.
          </li>
          <li>
            Inclusivity: Beginner-friendly and advanced challenges for all skill
            levels.
          </li>
          <li>
            Memorable Experiences: Perfect for families, friends, and
            team-building events.
          </li>
        </ul>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Our Blog</h2>
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <h3>{blog.title}</h3>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
