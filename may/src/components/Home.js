import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">Welcome to Stray Mays Treats!</h1>
          <p className="hero-subtitle">Your source for organic and healthy dog treats made with love.</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products mt-5">
        <div className="container text-center">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-list">
            <div className="product-card">
              <LazyLoadImage src="/images/peanut_butter_biscuits.jpg" alt="Peanut Butter Biscuits" effect="blur" className="rounded" />
              <h3>Peanut Butter Biscuits</h3>
              <p className="product-description">Yummy peanut butter flavor</p>
              <p className="product-price">$5</p>
              <Link to="/products" className="btn btn-secondary">View Product</Link>
            </div>
            <div className="product-card">
              <LazyLoadImage src="/images/chicken_jerky.jpg" alt="Chicken Jerky" effect="blur" className="rounded" />
              <h3>Chicken Jerky</h3>
              <p className="product-description">Savory chicken jerky</p>
              <p className="product-price">$7</p>
              <Link to="/products" className="btn btn-secondary">View Product</Link>
            </div>
            {/* Add more featured products here */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us mt-5">
        <div className="container text-center">
          <h2 className="section-title">About Us</h2>
          <p>At Stray Mays Treats, we are dedicated to providing your furry friends with the healthiest and most delicious treats. Our treats are made with organic ingredients, ensuring that your pets enjoy the best quality snacks.</p>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials mt-5">
        <div className="container text-center">
          <h2 className="section-title">Customer Testimonials</h2>
          <div className="testimonial">
            <p>"My dog absolutely loves these treats! I feel good knowing they're made with healthy ingredients."</p>
            <p>- Happy Customer</p>
          </div>
          <div className="testimonial">
            <p>"Stray Mays Treats are a hit with my pup. The variety of flavors is fantastic!"</p>
            <p>- Satisfied Pet Owner</p>
          </div>
          {/* Add more testimonials here */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta mt-5">
        <div className="container text-center">
          <h2 className="section-title">Ready to Treat Your Dog?</h2>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;



