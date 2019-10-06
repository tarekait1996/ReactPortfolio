import React from "react";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact-me" className="contact-container">
        <h1>Say Hi</h1>
        <hr className="is-hr-summary" />
        <div className="contact-content">
          <div className="Name-email-container">
            <input className="message-input" placeholder="Name" type="text" />
            <input className="message-input" placeholder="Email" type="email" />
          </div>
          <div className="message-input-container">
            <textarea
              className="message-input"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="btn">
            <a className="anchorNoStyle smallBtn" href="./resume.pdf">
              <span>Send</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
