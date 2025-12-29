import React, { useState } from "react";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      setStatus("Please enter username and select a role.");
      return;
    }

    // Role-based redirection (simulated)
    if (role === "admin") {
      setStatus(`Welcome Admin ${username}! Redirecting to Admin Dashboard...`);
    } else if (role === "user") {
      setStatus(`Welcome User ${username}! Redirecting to User Home Page...`);
    } else if (role === "guest") {
      setStatus(`Welcome Guest ${username}! Redirecting to Guest Page...`);
    }
  };

  return (
    <div style={{ width: "300px", margin: "60px auto" }}>
      <h2>User Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br />

        <div>
          <label>Select Role:</label><br />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div><br />

        <button type="submit">Login</button>
      </form>

      {status && <p style={{ marginTop: "20px" }}>{status}</p>}
    </div>
  );
}

export default UserLogin;
