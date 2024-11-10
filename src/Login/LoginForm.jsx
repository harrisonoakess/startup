import React from "react";

export default function LoginForm() {
  return (
    <section id="login-info">
      <div className="login-box">
        <h2>What is your name?</h2>
        <form action="/login">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </section>
  );
}