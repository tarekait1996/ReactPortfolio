import React from "react";
import "./InformationLayout.css";
import Typist from "react-typist";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class InformationLayout extends React.Component {
  render() {
    return (
      <div id="main" className="InformationLayout-container">
        <div className="InformationLayout-tintLayer1"></div>
        <div className="InformationLayout-centeredContainer">
          <h1 className="InformationLayout-title">
            <Typist blink="true">
              <span>Hi,</span>
              <br />
              <span>I am Tarek Ait Hamouda.</span>
              <Typist.Backspace count={23} delay={2000} />
              <span>Nice to meet you! </span>
            </Typist>
          </h1>
          <hr />
          <div className="InformationLayout-socialContactsIcons">
            <a href="https://github.com/tarekait1996">
              <FontAwesomeIcon className="faIcon" icon={faGithub} size="2x"/>
            </a>
            <a href="https://medium.com/@tarekaithamouda">
              <FontAwesomeIcon className="faIcon" icon={faMedium} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/tarek-ait-hamouda/">
              <FontAwesomeIcon className="faIcon" icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
        <Link
          activeClass="active"
          to="about-me"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <div className="InformationLayout-icon-scroll">
            <div className="InformationLayout-mouse">
              <div className="InformationLayout-wheel"></div>
            </div>
            <div className="InformationLayout-icon-arrows">
              <span></span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
