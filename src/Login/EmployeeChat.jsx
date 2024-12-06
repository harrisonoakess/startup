import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  return (
    <div>
      <EmployeeChat />
      <MessageInput />
    </div>
  );
}

function MessageInput() {
  const [message, setMessage] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socketRef.current = new WebSocket(`${protocol}://${window.location.host}/ws`); // Connecting to /ws endpoint
    socketRef.current.onopen = () => console.log('WebSocket connection established');
    socketRef.current.onclose = () => console.log('WebSocket connection closed');

    return () => socketRef.current.close();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socketRef.current.readyState === WebSocket.OPEN) {
      const outgoingMessage = {
        user: 'Current User', // Adjust to use actual user info if needed
        timestamp: new Date().toISOString(),
        message,
      };
      socketRef.current.send(JSON.stringify(outgoingMessage)); // Send the message to WebSocket server
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <section id="message-input">
      <form id="enter-text" onSubmit={handleSubmit}>
        <textarea
          name="message"
          placeholder="Type here"
          rows="2"
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

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socketRef.current = new WebSocket(`${protocol}://${window.location.host}/ws`); // Connecting to /ws endpoint
    socketRef.current.binaryType = 'text'; // Enforce text-based messages (not binary)
    socketRef.current.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data); // Parse the incoming WebSocket message
      setMessages((prevMessages) => [incomingMessage, ...prevMessages]); // Add new message to the beginning of the chat
    };

    socketRef.current.onclose = () => console.log('WebSocket connection closed');

    return () => socketRef.current.close();
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
