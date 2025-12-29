import React, { useState } from "react";

function LoginInterface() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      setMessage("Please enter username and select a role");
      return;
    }

    // Role-based redirection logic
    if (role === "admin") {
      setMessage(`Welcome Admin ${username}! Redirecting to Admin Dashboard...`);
    } else if (role === "user") {
      setMessage(`Welcome User ${username}! Redirecting to User Dashboard...`);
    } else if (role === "guest") {
      setMessage(`Welcome Guest ${username}! Redirecting to Guest Page...`);
    }
  };

  return (
    <div style={{ width: "300px", margin: "60px auto" }}>
      <h2>Login</h2>

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
          <label>Role:</label><br />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div><br />

        <button type="submit">Login</button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

export default LoginInterface;
