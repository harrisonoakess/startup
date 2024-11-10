import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="left_group">
          <Link to="/chat" className="btn btn-primary">
            My Tasks
          </Link>
        </div>
        <div className="right_group">
          <button className="btn btn-secondary me-2">Account</button>
          <button className="btn btn-outline-danger">Logout</button>
        </div>
      </div>
    </header>
  );
}