import React, { useState } from "react";

const Attendance = ({ students }) => {
  // Initialize all students as Absent
  const [attendance, setAttendance] = useState(
    students.map((name) => ({ name, status: "Absent" }))
  );

  // Toggle attendance status
  const toggleStatus = (index) => {
    const updated = [...attendance];
    updated[index].status =
      updated[index].status === "Present" ? "Absent" : "Present";
    setAttendance(updated);
  };

  return (
    <div style={styles.container}>
      <h2>Attendance Tracker</h2>
      {attendance.map((student, index) => (
        <div key={index} style={styles.studentRow}>
          <span>{student.name}</span>
          <button
            onClick={() => toggleStatus(index)}
            style={{
              ...styles.button,
              background: student.status === "Present" ? "#4caf50" : "#f44336",
            }}
          >
            {student.status}
          </button>
        </div>
      ))}

      <div style={styles.summary}>
        <p>
          Total Present: {attendance.filter((s) => s.status === "Present").length}
        </p>
        <p>
          Total Absent: {attendance.filter((s) => s.status === "Absent").length}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  studentRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  button: {
    border: "none",
    padding: "6px 12px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
  summary: {
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
  },
};

export default Attendance;

