import React from "react";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="left_group">
          <a href="https://startup.hrtogether.click/action.html" className="btn btn-primary">
            My Tasks
          </a>
        </div>
        <div className="right_group">
          <a href="" className="btn btn-secondary me-2">Account</a>
          <a href="https://startup.hrtogether.click/index.html" className="btn btn-outline-danger">
            Logout
          </a>
        </div>
      </div>
    </header>
  );
}