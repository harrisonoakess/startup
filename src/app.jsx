import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./login/Header";
import LoginForm from "./login/LoginForm";
import EmployeeChat from "./login/EmployeeChat";
import Footer from "./login/Footer";
import "./index.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;