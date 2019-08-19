import React from "react";
import "./Experience.css";
import sunlifeLogo from "./sunlife-logo.png";
import devblockLogo from "./devblock.png";

export default class Experience extends React.Component  {
    render() {
        return (
            <section className = "experience-container">
                <div className="experience-content">
                    <h2 className="experience-title">Experience</h2>
                    <hr className="is-hr-summary"/>
                    <div className="experiences-showcase-container">
                        <div className="each-experience-content" style = {{backgroundImage: `url(${sunlifeLogo})`}}>
                        </div>
                        <div className="each-experience-content" style = {{backgroundImage: `url(${sunlifeLogo})`}}>
                        </div>
                        <div className="each-experience-content" style = {{backgroundImage: `url(${devblockLogo})`}}>
                        </div>
                        <div className="each-experience-content" style = {{backgroundImage: `url(${devblockLogo})`}}>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
