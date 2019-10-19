import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <section className="Footer-container">
        <div className="footer-content">
          <h3 className="footer-content-title">Tarek</h3>
          <div className="footer-content-icons">
            <a
              className="socialContactsIcons"
              href="https://www.linkedin.com/in/tarek-ait-hamouda/"
            >
              <FontAwesomeIcon className="faIcon" icon={faLinkedinIn} />
            </a>
            <a
              className="socialContactsIcons"
              href="https://github.com/tarekait1996"
            >
              <FontAwesomeIcon className="faIcon" icon={faGithub} />
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
