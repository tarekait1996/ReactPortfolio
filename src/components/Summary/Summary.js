import React from "react";
import "./Summary.css";

export default class Summary extends React.Component {
  render() {
    return (
      <section id="about" className="summary-container">
        <div className="summary-content">
          <h2 className="summary-title">Hi, I'm Tarek. Nice to meet you!</h2>
          <p className="summary-description">
            {" "}
            I am a software engineer student at Concordia University who enjoys
            coding. I have experience in Android and IOS mobile development. I
            enjoy turning complex problems into simple, beautiful and intuitive
            solution.
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
                  <i className="fa fa-phone" />
                </span>
                +1-514-475-5957
              </li>
              <li className="about-list-item">
                <span className="about-list-item-fa">
                  <i className="fa fa-map-marker" />
                </span>
                Montreal, QC, Canada
              </li>
              <li className="about-list-item">
                <span className="about-list-item-fa">
                  <i className="fa fa-calendar" />
                </span>
                8 December 2019
              </li>
              <li className="about-list-item">
                    <div className="btn"><a className = "anchorNoStyle" href="./resume.pdf"><span>Get My Resume</span></a></div>
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
                  <div className="skill-year"> 2.5 years</div>
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
                  <div className="skill-year"> 1 years</div>
                </div>
              </div>
              <div className="progressBar">
                <div
                  className="skill-percentage-visual"
                  style={{ width: "55%" }}
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
      </section>
    );
  }
}
