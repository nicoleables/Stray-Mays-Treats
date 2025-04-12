import React from 'react';
import '../styles/About.css';
import May from "../images/May.jpg";

const About = () => {
  return (
    <div className="about-container mt-5">
      <h2 className="about-title">Our Story</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">Welcome to Stray Mays Treats! We are dedicated to providing your furry friends with the healthiest and most delicious treats. Our treats are made with organic ingredients, ensuring that your pets enjoy the best quality snacks.</p>
          <h3 className="about-subtitle">Our Mission</h3>
          <p className="about-mission">Our mission is to create wholesome and nutritious treats that dogs love. We believe that healthy treats can also be delicious, and we strive to make products that both pets and their owners can feel good about.</p>
          <h3 className="about-subtitle">Our Story</h3>
          <p className="about-story">Stray Mays Treats began with a rescue dog named May. After rescuing her, we wanted to provide her with the best possible treats, and that's how our journey started. We've always been passionate about making dog treats, and now we share that passion with you and your furry friends.</p>
        </div>
        <div className="about-image">
          <img src={May} alt="may img" className="mayimage" />
        </div>
      </div>
    </div>
  );
};

export default About;



