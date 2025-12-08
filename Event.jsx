// src/EventRegistrationForm.jsx
import { useState } from "react";

const Event = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2>Event Registration Form</h2>

      {submitted && <p style={styles.success}>Registration successful!</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Select Event:
          <select
            name="event"
            required
            value={formData.event}
            onChange={handleChange}
          >
            <option value="">-- Choose an event --</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
            <option value="Webinar">Webinar</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "auto", padding: "20px" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  success: {
    color: "green",
    fontWeight: "bold",
  },
};

export default Event;
