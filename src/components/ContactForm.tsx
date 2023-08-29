import { useState } from "react";
import "./Popup.css";

export function ContactForm() {
  const [newTrigger, setNewTrigger] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewTrigger(true)
  }

  function close(e: React.FormEvent) {
    e.preventDefault();
    setNewTrigger(false);
  }

  return newTrigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img src="/images/hearts.jpg" className="popup-image" />
        <h1 className="popup-header"> Thank You For Your Feedback! </h1>
        <p className="popup-body"> Your Response was successfully recorded. </p>
        <button
          className="close-btn"
          onClick={(e) => {
            close(e);
          }}
        >
          Close
        </button>
      </div>
    </div>
  ): (
    <div className="contact-form-container">
      <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
        <input
          className="contact-form-input"
          type="text"
          id="name"
          placeholder="Your Name"
          required
        />
        <input
          className="contact-form-input"
          type="email"
          id="email"
          placeholder="Email id"
          required
        />
        <input
          className="contact-form-input"
          type="text"
          id="phone"
          placeholder="Phone Number"
          required
        />
        <textarea
          className="contact-form-input"
          id="message"
          rows={4}
          placeholder="Your feedback"
        ></textarea>
        <button className="contact-form-btn" type="submit">
          {" "}
          Send{" "}
        </button>
      </form>
    </div>
  );
}
