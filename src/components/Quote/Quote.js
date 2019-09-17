import React from "react";
import "./Quote.css";

export default class Quote extends React.Component {
  render() {
    return (
      <section className="quote-item-container">
        <div className="quote-item-content">
          <h2 className="education-title">Quote of the Week</h2>
          <hr className="is-hr-summary" />

          <div className="quote-item-sentence">
            <p className="quote-sentence">
              “It isn't what you have or who you are or where you are or what
              you are doing that makes you happy or unhappy. It is what you
              think about it.”
            </p>
            <h4 className="quote-sentence-credit">― Dale Carnegie, How to Win Friends and Influence People</h4>
          </div>
        </div>
      </section>
    );
  }
}
