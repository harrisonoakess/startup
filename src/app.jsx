import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Login/Header";
import Footer from "./Login/Footer";
import LoginForm from "./Login/LoginForm";
import EmployeeChat from "./Login/EmployeeChat";
import './app.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/chat" element={<EmployeeChat />} />
      </Routes>
      <Footer />
    </Router>
  );
}