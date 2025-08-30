import React from "react";

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (placeholder)");
  };

  return (
    <section id="contact" className="card contact">
      <h3>Contact Us</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
