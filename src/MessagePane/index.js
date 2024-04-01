import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Only if you're using react-bootstrap
import "./styles.css";

const responses = [
  "Hello! How can I help you today?",
  "Thank you for reaching out to me.",
  "Please tell me what you want to know about me?",
  "I am here to answer your questions."
];

export default function MessagePane() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [responseIndex, setResponseIndex] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    const newUserMessage = { text: input, sender: 'user' };
    const newSystemResponse = { text: responses[responseIndex], sender: 'system' };

    setMessages(messages.concat(newUserMessage, newSystemResponse));
    setInput('');
    setResponseIndex((responseIndex + 1) % responses.length);
  };

  return (
    <Container fluid className="chat-container border-start">
      <Row className="flex-grow-1">
        <Col>
          <div className="messages-section">
            {messages.map((message, index) => (
              <Row key={index} className={`message-row ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <Col xs="auto">
                  <div className={`message ${message.sender}`}>
                    {message.text}
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="form-control"
            />
            <button onClick={handleSend} className="btn btn-primary">Send</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
