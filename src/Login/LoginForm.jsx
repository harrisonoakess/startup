import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isCreatingAccount ? "signup" : "login";
    
    try {
      const response = await fetch(`http://localhost:3000/api/users/${endpoint}`, {
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
        console.log(`${isCreatingAccount ? "Account created" : "Login"} successful:`, data.username);
      } else {
        setLoginSuccess(false);
        setErrorMessage(data.msg);
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