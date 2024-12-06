import React from "react";

export default function communication() {
  return (
    <div>
      <EmployeeChat />
      <MessageInput />
    </div>
  );
}

function MessageInput() {
  return (
    <section id="message-input">
      <form id="enter-text">
        <textarea name="message" id="input" placeholder="Type here" rows="2" cols="50"></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}

function EmployeeChat() {
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
            <td>09:53 AM</td>
            <td>Bill Jones</td>
            <td>Good morning!</td>
          </tr>
          <tr>
            <td>9/24/2024</td>
            <td>10:53 PM</td>
            <td>Mike Johnson</td>
            <td>Good night!</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
