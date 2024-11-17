import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setLoginSuccess(true);
        setErrorMessage("");
        console.log("Login successful:", data.username);
      } else {
        setLoginSuccess(false);
        setErrorMessage(data.msg);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginSuccess(false);
      setErrorMessage("An error occurred while trying to log in.");
    }
  };

  return (
    <section id="login-info">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {loginSuccess && <p style={{ color: "green" }}>Login successful!</p>}
    </section>
  );
}