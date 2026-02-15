"use client";

import { useState } from "react";
import "../../styles/contact.css";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate sending message (replace with actual API call)
    const isSuccess = Math.random() > 0.2; // 80% chance success

    if (isSuccess) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }

    // Reset message after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="contactPage">

      {/* HERO SECTION */}
      <section className="contactHero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out to us for inquiries or support.</p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contactContainer">

        {/* CONTACT INFO */}
        <div className="contactInfo">
          <div className="infoCard">
            <h3>📍 Address</h3>
            <p>Green Valley Academy</p>
            <p>P.O Box 123-00100</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="infoCard">
            <h3>📞 Phone</h3>
            <p>+254 700 123 456</p>
            <p>+254 712 345 678</p>
          </div>

          <div className="infoCard">
            <h3>📧 Email</h3>
            <p>info@greenvalley.ac.ke</p>
            <p>admissions@greenvalley.ac.ke</p>
          </div>

          <div className="infoCard">
            <h3>⏰ Office Hours</h3>
            <p>Monday – Friday</p>
            <p>8:00 AM – 5:00 PM</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contactFormWrapper">
          <h2>Send Us a Message</h2>

          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="formGroup">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="formGroup">
              <label>Subject</label>
              <input type="text" placeholder="Subject of your message" />
            </div>

            <div className="formGroup">
              <label>Message</label>
              <textarea placeholder="Write your message here..." rows={5} required></textarea>
            </div>

            <button type="submit" className="submitButton">
              Send Message
            </button>

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <p className="statusMessage success">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="statusMessage error">❌ Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

      </section>

    </div>
  );
}
