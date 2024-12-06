import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]); // Store messages at the parent level
  const socketRef = useRef();

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socketRef.current = new WebSocket(`${protocol}://${window.location.host}/ws`); // Connect to WebSocket
    socketRef.current.binaryType = 'text'; // Enforce text-based messages

    socketRef.current.onopen = () => console.log('WebSocket connection established');
    
    // WebSocket onmessage handler
    socketRef.current.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data); // Parse incoming message
      console.log('Backend message received:', incomingMessage); // Log message received from backend

      setMessages((prevMessages) => {
        console.log('Prev Messages:', prevMessages); // Debug: Check previous state of messages
        return [incomingMessage, ...prevMessages]; // Add new message to the list
      });
    };

    socketRef.current.onclose = () => console.log('WebSocket connection closed');

    return () => socketRef.current.close();
  }, []); // Empty dependency array ensures WebSocket only connects once

  // Log all messages in the console
  const logMessages = () => {
    console.log('Messages:', messages);
  };

  // Function to add message to state
  const addMessageToState = (message) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  return (
    <div>
      <EmployeeChat messages={messages} /> {/* Pass messages to EmployeeChat */}
      <MessageInput socketRef={socketRef} addMessageToState={addMessageToState} /> {/* Pass addMessageToState to MessageInput */}
      <button onClick={logMessages}>Log All Messages</button> {/* Button to log all messages */}
    </div>
  );
}

function MessageInput({ socketRef, addMessageToState }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && socketRef.current.readyState === WebSocket.OPEN) {
      const outgoingMessage = {
        user: 'Current User', // Replace with actual user info if needed
        timestamp: new Date().toISOString(),
        message,
      };
      console.log('Sending message:', outgoingMessage); // Log the outgoing message to check it
      socketRef.current.send(JSON.stringify(outgoingMessage)); // Send the message to WebSocket server

      // Add the message to the state as well
      addMessageToState(outgoingMessage);

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

function EmployeeChat({ messages }) {
  useEffect(() => {
    console.log('Messages received:', messages); // Debug: Check if messages are being passed correctly
  }, [messages]);

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
