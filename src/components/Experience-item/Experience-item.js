import React from "react";
import "./Experience-item.css";

export default class Experience extends React.Component {
  render(props) {
    return (
      <div className="experience-item-container">
        <div className="experience-item-content">
          <div className="experience-item-image">
            <img className="experience-item-image2" src={this.props.image} alt="work-6" />
          </div>

          <div className="experience-item-description">
            <h3 className="experience-item-description-title">
              {this.props.projectTitle}
            </h3>
            <h5 className="experience-item-description-sub-title">
              {this.props.projectDate}
            </h5>
            <h5 className="experience-item-description-sub-title">
              {this.props.projectSubTitle}
            </h5>
            <p className="experience-item-description-paragraph">
              {this.props.projectDescription}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
