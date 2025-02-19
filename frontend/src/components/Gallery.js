

import React from "react";
import "./Gallery.css";
import one from "../assets/1.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import zipliningImage from "../assets/ziplining.jpg";
import rockclimbingImage from "../assets/rockclimbing.jpg";
import kayakingImage from "../assets/kayaking.jpg";
import obstaclecourseImage from "../assets/obstaclecourse.jpg";

const Gallery = () => {
  const photos = [
    { src: one, description: "Beautiful Landscape" },
    { src: three, description: "Mountain Adventure" },
    { src: four, description: "Forest Trek" },
    { src: five, description: "Serene Lake" },
    { src: zipliningImage, description: "Thrilling Ziplining" },
    { src: rockclimbingImage, description: "Rock Climbing Fun" },
    { src: kayakingImage, description: "Kayaking Adventure" },
    { src: obstaclecourseImage, description: "Obstacle Challenge" },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={`Gallery ${index + 1}`} />
            <p className="image-description">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
