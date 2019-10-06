import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="Footer-container">
        <div className="footer-content">
          <h3 className="footer-content-title">Tarek</h3>
          <div className="footer-content-icons">
            <a className="footer-content-icons-anchor" href="https://www.linkedin.com/in/tarek-ait-hamouda/">
              <i className="fab fa-linkedin" />
            </a>
            <a className="footer-content-icons-anchor" href="https://github.com/tarekait1996">
              <i className="fab fa-github-alt" />
            </a>
          </div>
          <p className="copy-text">
            Tarek Ait Hamouda © 2019. all right reserved. TAREKAMEHA Solution
          </p>
        </div>
      </section>
    );
  }
}
