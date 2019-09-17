import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";
import DevBlock from './devblock.png';

export default class Project extends React.Component {
  render() {
    return (
      <section className="education-item-container">
        <h2 className="education-title">Projects</h2>
        <hr className="is-hr-summary" />

        <div className="education-content">
          <ProjectBox image = {DevBlock} iconName="fas fa-award fa-2x" projectTitle = "Helping Hand" projectName = "Hackathon Project" projectDate = "2018" firstSentence= "DevBlock Hack 1st place Winner"/>
          {/* <a className="projectAnchor" href="https://www.google.com"><ProjectBox image = {DevBlock} iconName="fas fa-mobile-alt fa-2x"  projectTitle = "Bitcoin IOS App" projectName = "Personal" projectDate = "2018" /></a>
          <ProjectBox image = {DevBlock} iconName="fas fa-mobile-alt fa-2x" projectTitle = "Weather IOS App" projectName = "Personal" projectDate = "2018" /></a> */}
        </div>
      </section>
    );
  }
}
