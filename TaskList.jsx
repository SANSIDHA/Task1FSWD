import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleRemoveTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div style={styles.container}>
      <h2>Task List Dashboard</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add Task
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.length === 0 && <p>No tasks added yet</p>}
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <span>{task}</span>
            <button
              onClick={() => handleRemoveTask(index)}
              style={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "400px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },
  inputContainer: {
    display: "flex",
    marginBottom: "15px",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addButton: {
    padding: "8px 12px",
    background: "#2196f3",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  },
  taskList: {
    listStyleType: "none",
    padding: 0
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #ddd"
  },
  removeButton: {
    padding: "4px 8px",
    background: "#f44336",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  }
};

export default TaskList;
