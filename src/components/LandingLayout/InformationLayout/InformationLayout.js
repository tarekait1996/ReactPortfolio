import React from "react";
import "./InformationLayout.css";
import Typist from "react-typist";
import { Link, animateScroll as scroll } from "react-scroll";
// import pic from './../InformationLayout/logo.png';

export default class InformationLayout extends React.Component {
  render() {
    return (
      <div id="main" className="container">
        <div className="centeredContainer">
          <h1 className="title">
            <Typist blink="true">
              <span>I am Tarek Ait Hamouda.</span>
              <Typist.Backspace count={23} delay={600} />
              <span>Just call me Tarek.</span>
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
              <i className="fab fa-github-alt" />
            </a>
            <a href="https://www.linkedin.com/in/tarek-ait-hamouda/">
              <i className="fab fa-linkedin" />
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
