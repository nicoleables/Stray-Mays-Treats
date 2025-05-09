import React, { useState } from 'react';
import '../styles/Testimonials.css'; // Create and add styles specific to this page

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { text: "My dog absolutely loves these treats! I feel good knowing they're made with healthy ingredients.", author: "Happy Customer" },
    { text: "Stray Mays Treats are a hit with my pup. The variety of flavors is fantastic!", author: "Satisfied Pet Owner" },
  ]);
  const [newTestimonial, setNewTestimonial] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  // Handle form submission
  const handleAddTestimonial = (e) => {
    e.preventDefault();
    const newEntry = { text: newTestimonial, author: newAuthor || 'Anonymous' };
    setTestimonials([...testimonials, newEntry]);
    setNewTestimonial('');
    setNewAuthor('');
  };

  return (
    <div className="testimonials-page">
      <h1 className="page-title">Customer Testimonials</h1>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <form className="testimonial-form" onSubmit={handleAddTestimonial}>
        <textarea
          placeholder="Write your testimonial here..."
          value={newTestimonial}
          onChange={(e) => setNewTestimonial(e.target.value)}
          className="form-control"
          required
        />
        <input
          type="text"
          placeholder="Your name (optional)"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default Testimonials;
