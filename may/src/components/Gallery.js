import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Treat from "../images/treats.jpg"; // Using the provided image
import '../styles/Gallery.css';

const Gallery = () => {
  // Generating an array of duplicate images to simulate a full gallery
  const photos = Array.from({ length: 12 }, (_, index) => ({
    src: Treat,
    alt: `Delicious dog treat ${index + 1}`,
  }));

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Bark-Worthy Treats</h2>
      <p className="gallery-description">
        Explore our handcrafted, tail-wagging treats made with love and organic ingredients!
      </p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <LazyLoadImage src={photo.src} alt={photo.alt} effect="blur" className="photo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

