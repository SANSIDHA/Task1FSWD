import React, { useState } from "react";

function Dashboard() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "You have a new dashboard notification!"
    };

    setNotifications([newNotification, ...notifications]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div style={{ width: "400px", margin: "60px auto" }}>
      <h2>Dashboard</h2>

      <button onClick={addNotification}>Add Notification</button>
      <button onClick={clearNotifications} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Notifications</h3>

        {notifications.length === 0 && <p>No notifications</p>}

        <ul>
          {notifications.map((note) => (
            <li key={note.id}>{note.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
