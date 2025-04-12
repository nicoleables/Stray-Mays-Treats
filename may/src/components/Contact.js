import React from 'react';
import '../styles/Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container mt-5">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.</p>
      <form className="contact-form mt-4">
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
