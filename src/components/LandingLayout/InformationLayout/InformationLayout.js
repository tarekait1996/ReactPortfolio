import React from "react";
import "./InformationLayout.css";
import Typist from "react-typist";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class InformationLayout extends React.Component {
  render() {
    return (
      <div id="main" className="container">
        <div className="centeredContainer">
          <h1 className="title">
            <Typist blink="true">
              <span>Hi,</span>
              <br />
              <span>I am Tarek Ait Hamouda.</span>
              <Typist.Backspace count={23} delay={2000} />
              <span>Nice to meet you</span>
            </Typist>
          </h1>
          <div className="description-Container">
            <p className="description">
              Software Engineering student.
              <br />
              Mobile & web development enthusiast.
              <br />
              Love Art, Food and Music.
            </p>
          </div>
          <hr />
          <div className="socialContactsIcons">
            <a href="https://github.com/tarekait1996">
              <FontAwesomeIcon className="faIcon" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/tarek-ait-hamouda/">
              <FontAwesomeIcon className="faIcon" icon={faLinkedinIn} />
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
          <div className="icon-scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="icon-arrows">
              <span></span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
