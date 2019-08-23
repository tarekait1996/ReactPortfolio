import React from "react";
import "./Experience.css";
import sunlifeLogo from "./sunlife-logo.png";
import devblockLogo from "./devblock.png";

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    console.log('mouse enter')
    this.setState({ hover: !this.state.hover });
    console.log(this.state.hover? "true":"false");
  }
  render() {
    return (
      <section className="experience-container">
        <div className="experience-content">
          <h2 className="experience-title">Experience</h2>
          <hr className="is-hr-summary" />
          <div
            className="experiences-showcase-container"
          >
            <div
            onMouseOver={() => this.toggleHover()}
            onMouseOut={() => this.toggleHover()}
              className="each-experience-content"
              style={{ backgroundImage: `url(${sunlifeLogo})` }}
            >
              <div
                key={this.props.hover}
                className={
                  "each-experience-content-over-background " +
                  (this.props.hover ? "effect" : "gone")
                }
              >
                <h3>Sun Life Financial</h3>
                <p>IOS Mobile Dev Co-op</p>
              </div>
            </div>
            <div
              className="each-experience-content"
              style={{ backgroundImage: `url(${sunlifeLogo})` }}
            />
            <div
              className="each-experience-content"
              style={{ backgroundImage: `url(${devblockLogo})` }}
            />
            <div
              className="each-experience-content"
              style={{ backgroundImage: `url(${devblockLogo})` }}
            />
          </div>
        </div>
      </section>
    );
  }
}
