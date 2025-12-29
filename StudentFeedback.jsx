import React, { useState } from "react";

function StudentFeedback() {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !comments.trim()) {
      alert("Please provide both rating and comments.");
      return;
    }

    setMessage(
      `Thank you for your feedback!\n\nRating: ${rating} star(s)\nComments: ${comments}`
    );

    // Clear form after submission
    setRating("");
    setComments("");
  };

  return (
    <div style={{ width: "350px", margin: "60px auto" }}>
      <h2>Student Feedback</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating:</label><br />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div><br />

        <div>
          <label>Comments:</label><br />
          <textarea
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div><br />

        <button type="submit">Submit Feedback</button>
      </form>

      {message && (
        <p style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default StudentFeedback;
