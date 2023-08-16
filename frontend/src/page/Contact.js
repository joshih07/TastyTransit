import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the logic to send the email here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <div style={infoStyle}>
        <h4>Contact Information</h4>
        <p>Email: example@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div style={formStyle}>
        <h4>Email Us</h4>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} style={inputStyle} required />
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const infoStyle = {
  marginBottom: '20px',
};

const formStyle = {
  marginBottom: '20px',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

export default Contact;
