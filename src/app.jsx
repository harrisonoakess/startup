import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Login/Header";
import Footer from "./Login/Footer";
import LoginForm from "./Login/LoginForm";
import EmployeeChat from "./Login/EmployeeChat";
import ChooseBar from "./Action/ChooseBar";
import TaskTable from "./Action/TaskTable";
import MessageInput from "./Action/MessageInput";


// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
          <LoginForm />
          </div>} />
        <Route path="/tasks" element={
          <div>
            <Header/>
            <ChooseBar />
            <TaskTable />
            <EmployeeChat />
          </div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

