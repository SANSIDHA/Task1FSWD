import React, { useState } from "react";

function OnlineWrkshp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    experience: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Workshop Registration Successful!");
  };

  return (
    <div style={{ display: "flex", gap: "40px", margin: "50px" }}>
      
      {/* Registration Form */}
      <div>
        <h2>Online Workshop Registration</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div><br />

          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div><br />

          <div>
            <label>Workshop Topic:</label><br />
            <select
              name="workshop"
              value={formData.workshop}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="AI & ML">AI & ML</option>
            </select>
          </div><br />

          <div>
            <label>Experience Level:</label><br />
            <input
              type="radio"
              name="experience"
              value="Beginner"
              onChange={handleChange}
            /> Beginner
            <input
              type="radio"
              name="experience"
              value="Intermediate"
              onChange={handleChange}
            /> Intermediate
            <input
              type="radio"
              name="experience"
              value="Advanced"
              onChange={handleChange}
            /> Advanced
          </div><br />

          <button type="submit">Register</button>
        </form>
      </div>

      {/* Live Preview */}
      <div style={{ border: "1px solid #000", padding: "20px", width: "300px" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Workshop:</strong> {formData.workshop}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
      </div>
    </div>
  );
}

export default OnlineWrkshp;
