import React from "react";
import "./EducationBox.css";

export default class Education extends React.Component {
  render() {
    return (
      <div className="education-box">
        <div className="uniicon">
          <i className={`${ this.props.iconName }`} />
        </div>
        <h4>{this.props.programTitle}</h4>
        <ul className="school-responsibility">
          <li className="italic-li">{this.props.schoolName}</li>
          <li className="italic-li">{this.props.Educationlocation}</li>
          <li className="italic-li">{this.props.educationDate}</li>
        </ul>
        <ul className="school-responsibility">
          <li>{this.props.firstSentence}</li>
          <li>{this.props.secondSentence}</li>
        </ul>
      </div>
    );
  }
}
