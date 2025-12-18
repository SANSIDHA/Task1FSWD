import React, { useState } from "react";
import CourseEnrollment from "./FullStackProject/CourseEnrollment.jsx";

const App = () => {
  const [enrollments, setEnrollments] = useState([]);

  const handleEnroll = (data) => {
    setEnrollments([...enrollments, data]);
  };

  return (
    <div style={styles.container}>
      <CourseEnrollment onEnroll={handleEnroll} />

      <div style={styles.listBox}>
        <h2>Enrolled Courses</h2>

        {enrollments.length === 0 ? (
          <p>No enrollments yet</p>
        ) : (
          enrollments.map((item, index) => (
            <div key={index} style={styles.card}>
              <p><strong>Student:</strong> {item.studentName}</p>
              <p><strong>Course:</strong> {item.courseName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    background: "#f0f2f5"
  },
  listBox: {
    width: "320px"
  },
  card: {
    background: "#fff",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
  }
};

export default App;
