import React, { useState } from 'react';

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
      rating,
      date: new Date().toLocaleString()
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setRating(5);
  };

  return (
    <div className="container mt-5">
      <h3>Customer Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating} stars</p>
            <p>Date: {review.date}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleReviewSubmit}>
        <div className="mb-3">
          <label htmlFor="reviewText" className="form-label">Write a review:</label>
          <textarea className="form-control" id="reviewText" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating:</label>
          <select className="form-control" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
