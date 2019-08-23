import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="Footer-container">
        <div className="footer-content">
          <h3 className="footer-content-title">Tarek</h3>
          <div className="footer-content-icons">
            <a className="footer-content-icons-anchor" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="footer-content-icons-anchor" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="footer-content-icons-anchor" href="#">
              <i className="fab fa-linkedin" />
            </a>
            <a className="footer-content-icons-anchor" href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <p class="copy-text">
            Tarek Ait Hamouda © 2018. all right reserved. Kamehameha Solution
          </p>
        </div>
      </section>
    );
  }
}
