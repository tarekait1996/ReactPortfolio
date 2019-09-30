import React from "react";
import "./Recommendation.css";

export default class Recommendation extends React.Component {
  render(props) {
    return (
      <section className="recommendation-container">
        <div className="recommendation-content">
          <img src={this.props.image} alt="" className="circle-avatar" />
          <div className="recommendation-information">
            <h4>{this.props.name}</h4>
            <span>{this.props.position}</span>
          </div>
          <blockquote >
          <p className="recommendation-paragraph">
            
            {this.props.paragraph}
          </p>
          </blockquote>
          
        </div>
      </section>
    );
  }
}
