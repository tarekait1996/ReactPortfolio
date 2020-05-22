import React from "react";
import "./Education.css";
import EducationBox from "./EducationBox/EducationBox";
import Bounce from "react-reveal/Bounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
export default class Education extends React.Component {
  render() {
    return (
      <section id="education" className="education-item-container">
        <h2 className="education-title">Education</h2>
        <hr className="is-hr-summary" />

        <div className="education-content">
          <Bounce left>
            <EducationBox
              iconName="fas fa-university fa-2x"
              programTitle="Software Engineering Co-op"
              schoolName="Concordia University"
              educationDate="2017-2021"
              Educationlocation="Montreal, QC, Canada"
              firstSentence="Dean's List 2018-2019"
              secondSentence="Recipient of Vigilant-DRW Software ICS award"
            > 
            <FontAwesomeIcon className="faEducIcon" icon={faGraduationCap} />
            </EducationBox>
          </Bounce>
          <Bounce left>
            <EducationBox
              iconName="fas fa-graduation-cap fa-2x"
              programTitle="Pure and Applied Science"
              schoolName="Vanier College"
              educationDate="2014-2016"
              Educationlocation="Montreal, QC, Canada"
              firstSentence="S.T.A.R. program (60+ hours of volunteering)"
              secondSentence=""
            > <FontAwesomeIcon className="faEducIcon" icon={faSchool} />
            </EducationBox>
          </Bounce>
          <Bounce right>
            <EducationBox
              iconName="fab fa-adobe fa-2x"
              programTitle="Photoshop Tutor"
              schoolName="Vanier College"
              educationDate="2014-2016"
              Educationlocation="Montreal, QC, Canada"
              firstSentence=""
              secondSentence=""
            > <FontAwesomeIcon className="faEducIcon" icon={faUniversity} /> </EducationBox>
          </Bounce>
        </div>
      </section>
    );
  }
}
