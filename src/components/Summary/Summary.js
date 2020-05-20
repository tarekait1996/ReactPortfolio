import React from "react";
import "./Summary.css";
import resume from "./resume.pdf";
import Bounce from 'react-reveal/Bounce';

export default class Summary extends React.Component {
  render() {
    return (
      <section id="about-me" className="summary-container">
        <Bounce left>
          <div className="summary-content">
            <h2 className="summary-title">Hi, I'm Tarek. Nice to meet you!</h2>
            <p className="summary-description">
              {" "}
              I am a 3rd year Student at Concordia University in montreal, Canada. 
              I originally got into programming because I loved the idea of mixing 
              logic, science and technology to find solution for real life problem.
              I also wanted to automate my life to have more time to do things that I love.
            </p>
            <div className="about-information">
              <ul className="about-list">
                <li className="about-list-item">
                  <span className="about-list-item-fa">
                    <i className="fa fa-envelope" />
                  </span>
                  tarekaithamouda@gmail.com
                </li>
                <li className="about-list-item">
                  <span className="about-list-item-fa">
                    <i className="fa fa-map-marker" />
                  </span>
                  Montreal, QC, Canada
                </li>
                <li className="about-list-item">
                  <div className="btn">
                    <a className="anchorNoStyle" href={resume} download>
                      <span>Get My Resume</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="skills-year-content">
            <h2 className="summary-title">Technical Skills</h2>
            <div className="skills-individual">
              <div className="skill-content">
                <div className="info">
                  <div className="skill-info-content">
                    <div className="skill-name">Java</div>
                    <div className="skill-year"> 5 years</div>
                  </div>
                </div>
                <div className="progressBar">
                  <div
                    className="skill-percentage-visual"
                    style={{ width: "90%" }}
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
                    <div className="skill-name">Android Development</div>
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
          </div>
        </Bounce>
      </section>
    );
  }
}
