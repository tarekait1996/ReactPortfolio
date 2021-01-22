import React from "react";
import "./Summary.css";
import resume from "./resume.pdf";
import profilePic from "./profilePic.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Bounce from 'react-reveal/Bounce';

export default class Summary extends React.Component {
  render() {
    return (
      <section id="about-me">
        <div className="summary-container">
            <Bounce left>
              <div className = "summary-avatar-circle-container"> 
                <img src={profilePic} alt="" className="summary-circle-avatar" />
              </div>
              <div className="summary-content">
                <h2 className="summary-title">Hi, I'm Tarek. Nice to meet you!</h2>
                <p className="summary-description">
                  {" "}
                  I am a 3rd year Student at Concordia University in montreal, Canada. 
                  I originally got into programming because I loved the idea of mixing 
                  logic, science and technology to find solution for real life problem.
                  I also wanted to automate my life to have more time to do things that I love.
                </p>
                <br/>
                <div className="btn">
                  <a className="anchorNoStyle" href={resume} download>
                    <span>Get My Resume</span>
                  </a>
                </div>
              </div>
              <div className="skills-year-content">
            <h2 className="summary-title">Technical Skills</h2>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">Java</div>
                    <div className="skill-year"> 6 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
            </div>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">Android Development</div>
                    <div className="skill-year"> 2 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">IOS Development</div>
                    <div className="skill-year"> 1.5 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
            </div>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">React</div>
                    <div className="skill-year"> .5 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">Angular</div>
                    <div className="skill-year"> .25 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "12.5%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        
              </Bounce>
        </div>

      </section>
    );
  }
}
