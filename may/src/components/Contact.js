import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm(
      'service_qu7ksre', // Replace with your EmailJS Service ID
      'template_jrtcujm', // Replace with your EmailJS Template ID
      formRef.current, 
      'Kd8FvL-dz_FHkhKj0' // Replace with your EmailJS User ID
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
        formRef.current.reset(); // Clear the form fields
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send your message. Please try again.');
      }
    );
  };

  return (
    <div className="contact-container mt-5">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
      </p>
      <form className="contact-form mt-4" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

