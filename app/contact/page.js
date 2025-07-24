export default function ContactPage() {
  return (
    <>
      <h2>Contact Us via WhatsApp (074 042 1741) or fill out the form:</h2>

      <form
        action="https://formspree.io/f/xovlegjp"
        method="POST"
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          style={inputStyle}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          style={inputStyle}
        />

        <label>Message:</label>
        <textarea
          name="message"
          required
          style={inputStyle}
        ></textarea>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
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
