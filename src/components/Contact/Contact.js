import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact-container">
        <div className="contact-content">
          <h1>Say Hi</h1>
            <div className="Name-email-container">
              <input className="message-input" placeholder="Name" type="text" />
              <input className="message-input" placeholder="Email" type="email" />
            </div>
            <div className="message-input-container">
            <textarea className="message-input" placeholder="Message"></textarea>
            </div>
          </div>
      </section>
    );
  }
}
