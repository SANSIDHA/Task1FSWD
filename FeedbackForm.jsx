import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback); // Send feedback to parent
    setFeedback({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div style={styles.formBox}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={feedback.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const styles = {
  formBox: {
    background: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "8px"
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginTop: "8px",
    height: "80px"
  },
  button: {
    width: "100%",
    padding: "8px",
    marginTop: "10px",
    background: "#f76b1c",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

export default FeedbackForm;
