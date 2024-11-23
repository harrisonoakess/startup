import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isCreatingAccount ? "create" : "login";
    
    try {
      const response = await fetch(`/api/users/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      // Check if the response was successful
      if (response.ok) {
        setLoginSuccess(true);
        setErrorMessage("");
        
        // Navigate to the tasks page on successful login or account creation
        navigate("/tasks");
      } else {
        setLoginSuccess(false);
        setErrorMessage(data.msg || "Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login/signup:", error);
      setLoginSuccess(false);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <section id="login-info">
      <div className="login-box">
        <h2>{isCreatingAccount ? "Create Account" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">{isCreatingAccount ? "Create Account" : "Login"}</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {loginSuccess && (
          <p className="success-message">
            {isCreatingAccount ? "Account created successfully!" : "Login successful!"}
          </p>
        )}
        <p className="toggle-form">
          {isCreatingAccount ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsCreatingAccount(!isCreatingAccount)}
          >
            {isCreatingAccount ? "Login" : "Create Account"}
          </button>
        </p>
      </div>
    </section>
  );
}