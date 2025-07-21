"use client";

import { useState } from "react";

export default function ContactPage() {
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setResponse(`Thank you, ${name}! We’ll reply to ${email} soon.`);
    e.target.reset();
  };

  return (
    <>
      <h2>Contact Us via WhatsApp (074 042 1741) or fill out the form:</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" required style={inputStyle} />

        <label>Email:</label>
        <input type="email" name="email" required style={inputStyle} />

        <label>Message:</label>
        <textarea name="message" required style={inputStyle}></textarea>

        <button style={buttonStyle}>Send Message</button>
      </form>
      {response && <p style={{ color: "green", fontWeight: "bold" }}>{response}</p>}
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #a0522d",
  marginBottom: "10px",
};
const buttonStyle = {
  padding: "10px 20px",
  background: "#32a852",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};
