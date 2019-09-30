import React from "react";
import "./InformationLayout.css";
import Typist from "react-typist";
// import pic from './../InformationLayout/logo.png';

export default class InformationLayout extends React.Component {
  render() {
    return (
      <div className="container">
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
              <br/>
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
            <a href="https://www.pictame.com/user/tarekait96/15069466132">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://twitter.com/tarekaithamouda">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
        <div className="bottomDiv">
          <a href="/">
            <i className="fas fa-chevron-down" />
          </a>
        </div>
      </div>
    );
  }
}
