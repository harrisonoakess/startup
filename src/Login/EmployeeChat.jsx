import React from "react";

export default function EmployeeChat() {
  return (
    <section id="employee-chat">
      <h2>Employee Chat</h2>
      <table className="chat-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>User</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9/25/2024</td>
            <td>09:53 am</td>
            <td>Bill Jones</td>
            <td>Good morning!</td>
          </tr>
          <tr>
            <td>9/24/2024</td>
            <td>10:53 pm</td>
            <td>Mike Johnson</td>
            <td>Good night!</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}