import React from "react";
import "./ProjectBox.css";

export default class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover ? "true" : "false");
  }
  render() {
    const divClass = this.state.hover
      ? "fig-caption effect"
      : "fig-caption gone";
    return (
      <div className="project-box" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {/* <div className="uniicon">
          <i className={`${ this.props.iconName }`} />
        </div>
        <h4>{this.props.projectTitle}</h4>
        <ul className="project-responsibility">
          <li className="italic-li">{this.props.projectName}</li>
          <li className="italic-li">{this.props.projectlocation}</li>
          <li className="italic-li">{this.props.projectDate}</li>
        </ul>
        <ul className="project-responsibility">
          <li>{this.props.firstSentence}</li>
          <li>{this.props.secondSentence}</li>
        </ul> */}
        
            <img className="project-image"src={this.props.image} alt="project-image" />
                <figcaption className={this.divClass}>
                hello
                                            <i className="fa fa-search"></i>
                                            <h5 className="title">{this.props.projectName}</h5>
                                            <span className="sub-title">{this.props.projectlocation}</span>
                                            <a href="" data-fancybox="" data-src="#mh"></a>
                </figcaption>
      </div>
    );
  }
}
