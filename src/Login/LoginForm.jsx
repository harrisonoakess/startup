import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", username);
  };

  return (
    <section id="login-info">
      <div className="login-box">
        <h2>What is your name?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </section>
  );
}