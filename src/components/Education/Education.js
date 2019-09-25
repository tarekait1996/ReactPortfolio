import React from "react";
import "./Education.css";
import EducationBox from './EducationBox/EducationBox';

export default class Education extends React.Component {
  render() {
    return (
      <section className="education-item-container">
        <h2 className="education-title">Education</h2>
        <hr className="is-hr-summary" />

        <div className="education-content">
          <EducationBox iconName="fas fa-university fa-2x" programTitle = "Software Engineering Co-op" schoolName = "Concordia University" educationDate = "2017-2021" Educationlocation= "Montreal, QC, Canada" firstSentence= "Dean's List 2018-2019" secondSentence = "Recipient of Vigilant-DRW Software ICS award"/>
          <EducationBox iconName="fas fa-graduation-cap fa-2x" programTitle = "Pure and Applied Science" schoolName = "Vanier College" educationDate = "2014-2016" Educationlocation= "Montreal, QC, Canada" firstSentence= "S.T.A.R. program (60+ hours of volunteering)" secondSentence = ""/>
          <EducationBox iconName="fab fa-adobe fa-2x" programTitle = "Photoshop Tutor" schoolName = "Vanier College" educationDate = "2014-2016" Educationlocation= "Montreal, QC, Canada" firstSentence= "" secondSentence = ""/>
        </div>
      </section>
    );
  }
}
