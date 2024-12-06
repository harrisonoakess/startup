import React, { useState, useEffect, useRef } from "react";

export default function Communication() {
  return (
    <div>
      <EmployeeChat />
      <MessageInput />
    </div>
  );
}

function MessageInput() {
  const [message, setMessage] = useState("");
  const socketRef = useRef();

  // Initialize WebSocket connection when the component mounts
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:4000");
    socketRef.current.onopen = () => console.log("WebSocket connection established");
    socketRef.current.onclose = () => console.log("WebSocket connection closed");
    return () => socketRef.current.close(); // Cleanup on unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socketRef.current.readyState === WebSocket.OPEN) {
      const outgoingMessage = {
        user: "Current User", // Replace with the actual user info
        timestamp: new Date(),
        message,
      };
      socketRef.current.send(JSON.stringify(outgoingMessage)); // Send message to server
      setMessage(""); // Clear input field
    }
  };

  return (
    <section id="message-input">
      <form id="enter-text" onSubmit={handleSubmit}>
        <textarea
          name="message"
          id="input"
          placeholder="Type here"
          rows="2"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}

function EmployeeChat() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  // Initialize WebSocket connection and listen for incoming messages
  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:4000");

    socketRef.current.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [incomingMessage, ...prevMessages]);
    };

    socketRef.current.onclose = () => console.log("WebSocket connection closed");
    return () => socketRef.current.close(); // Cleanup on unmount
  }, []);

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
          {messages.map((msg, index) => {
            const date = new Date(msg.timestamp);
            const formattedDate = date.toLocaleDateString();
            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return (
              <tr key={index}>
                <td>{formattedDate}</td>
                <td>{formattedTime}</td>
                <td>{msg.user}</td>
                <td>{msg.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}