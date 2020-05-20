import React from "react";
import "./Experience-list.css";
import ExperienceItem from "./../Experience-item/Experience-item";
import sunlifeLogo from "./sunlife-logo.png";
import amazonLogo from "./amazonLogo.png";
import Bounce from 'react-reveal/Bounce';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    console.log("mouse enter");
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover ? "true" : "false");
  }
  render() {
    // const divClass = this.state.hover
    //   ? "each-experience-content-over-background effect"
    //   : "each-experience-content-over-background gone";

    const stringAndroid =
      " As an Android Developer, I participated in the development and maintenance of SunLife's mobile application. I mainly worked on the Provider Search section of the app. My tasks included completing features during sprints, refactoring code, contributing to unit Tests and UI tests, giving my input during sprint planning and refinement meetings.";
    const stringIOS =
      " As an IOS Developer, I participated in the development  of mobile application for internal and external clients. This allowed to to communicate with Project Managers, System Designers, Business System Analysts, Application analysts, and Testing Specialists to deliver high-quality solutions.I was also involved in projects from initiation to deployment, particularly during the development phase. I also participated in the discovery and evaluation of new technologies.";

      return (
      <section id = "experience" className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <hr className="is-hr-summary" />
        <div className="experience-content">
          <div className="experiences-showcase-container">
          <div className="ExperienceItemDiv">
            <Bounce left>
              <ExperienceItem
                projectTitle="Software Developer Engineer (Co-op)"
                projectDate = "June 2020 - September 2020"
                projectSubTitle="Amazon, Vancouver"
                projectDescription="Incoming"
                image={amazonLogo}
              />
              </Bounce>
            </div>
            <div className = "ExperienceItemDiv">
            <Bounce right>
            <ExperienceItem
              className="ExperienceItemDiv"
              projectTitle="Android Developer (Co-op)"
              projectDate = "May 2019 - September 2019"
              projectSubTitle="SunLife Financial, Montreal"
              projectDescription={stringAndroid}
              image={sunlifeLogo}
            />
            </Bounce>
            </div>
            <div className="ExperienceItemDiv">
            <Bounce left>
              <ExperienceItem
                projectTitle="IOS Developer (Co-op)"
                projectDate = "August 2018 - December 2018"
                projectSubTitle="SunLife Financial, Montreal"
                projectDescription={stringIOS}
                image={sunlifeLogo}
              />
              </Bounce>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
