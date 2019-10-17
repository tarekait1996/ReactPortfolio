
import React from "react";
import "./Project-item.css";

export default class Experience extends React.Component {
  render(props) {
    return (
      <div className="project-item-container">
        <div className="project-item-content">
          <div className="project-item-image">
            <img className="project-item-image2" src={this.props.image} alt="work-6" />
          </div>

          <div className="project-item-description">
            <h3 className="project-item-description-title">
              {this.props.projectTitle}
            </h3>
            <h5 className="project-item-description-sub-title">
              {this.props.projectDate}
            </h5>
            <h5 className="project-item-description-sub-title">
              {this.props.projectSubTitle}
            </h5>
            <p className="project-item-description-paragraph">
              {this.props.projectDescription}
            </p>
            <div className="btn">
                    <a className="anchorNoStyle" href= {this.props.projectUrl}>
                      <span>See the Project</span>
                    </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
