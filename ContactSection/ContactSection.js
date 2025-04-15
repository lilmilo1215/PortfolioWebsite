import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Hi, my name is ${name}.\n\nMy email: ${email}\n\n${message}`);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=paki8879@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <section className="contact-section hero" id="contact">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="brand-name">Contact Me</h2>
        <p>If you’ve got a question, opportunity, or just want to say hi — feel free to reach out!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="hero-btn">Send Message via Gmail</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
