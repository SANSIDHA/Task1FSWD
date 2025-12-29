import React, { useState } from "react";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials (simulation)
  const validUsername = "admin";
  const validPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("❌ Username and password are required!");
      return;
    }

    if (username === validUsername && password === validPassword) {
      alert("✅ Login Successful! Welcome Admin.");
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };

  return (
    <div style={{ width: "300px", margin: "60px auto" }}>
      <h2>Basic Authentication</h2>

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
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Authentication;
