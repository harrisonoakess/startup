import React from "react";
import { Link } from "react-router-dom";
// import button 


export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="left_group">
          <Link to="/tasks" className="btn btn-primary">My Tasks</Link>
        </div>
        <div className="right_group">
          <Link to="/" className="btn btn-secondary me-2">Account</Link>
          <Link to="/" className="btn btn-outline-danger">Logout</Link>
        </div>
      </div>
    </header>
  );
}