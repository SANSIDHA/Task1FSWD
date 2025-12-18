import React, { useState } from "react";

const CourseEnrollment = ({ onEnroll }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    courseName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnroll(formData);
    setFormData({ studentName: "", courseName: "" });
  };

  return (
    <div style={styles.formBox}>
      <h2>Course Enrollment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>
    </div>
  );
};

const styles = {
  formBox: {
    background: "#ffffff",
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
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    background: "#4caf50",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

export default CourseEnrollment;
