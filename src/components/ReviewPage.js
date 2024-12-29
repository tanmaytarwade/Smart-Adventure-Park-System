import React, { useState } from 'react';
import './ReviewPage.css'; // Custom CSS for styling

// Sample data for previous feedback
const previousReviews = [
  { id: 1, name: 'John Doe', rating: 4, review: 'Great experience! Highly recommend it.' },
  { id: 2, name: 'Jane Smith', rating: 5, review: 'Amazing place! Will definitely visit again.' },
  { id: 3, name: 'Michael Johnson', rating: 3, review: 'Good, but could be better in terms of activities.' },
];

const ReviewPage = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(previousReviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) {
      alert('Please fill all the required fields.');
      return;
    }

    const newReview = { id: reviews.length + 1, name, rating, review };
    setReviews([...reviews, newReview]);
    setName('');
    setRating(1);
    setReview('');
  };

  return (
    <div className="review-page-container">
      <div className="review-page">
        <h1>Customer Reviews & Feedback</h1>

        <div className="previous-reviews">
          <h2>Previous Feedback</h2>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.name}</h3>
              <p>Rating: {review.rating} ★</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>

        <div className="review-form">
          <h2>Submit Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Rating (1 to 5):</label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Review:</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your feedback"
                required
              ></textarea>
            </div>

            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

