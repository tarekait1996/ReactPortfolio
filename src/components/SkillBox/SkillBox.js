import React from "react";
import "./SkillBox.css";

var data;

export default class SkillBox extends React.Component  {

    constructor(props) {
        super(props);
        data = {
        title: this.props.title,
        mainDescription : this.props.mainDescription,
        skillSubTitle : this.props.skillSubTitle,
        skillSubTitle2: this.props.skillSubTitle2
        };
    }
    render(props) {
        return (
            <section className = "skillBox-container">
                <div className="skillBox-content">
                    <figure className ="image">
                        <i class="fas fa-mobile-alt"></i>
                    </figure>
                    <h1 className = "is-title-skillBox is-size-4 is-spaced">{data.title}</h1>
                    <p className = "skill-description">
                        {data.mainDescription}
                    </p>
                    <hr className="is-hr-skillBox"/>
                    <p className="skill-sub-title">
                        {data.skillSubTitle}
                    </p>
                    <div className = "platform-description-container">
                        <i class="fab fa-android"></i>
                        <i class="fab fa-apple"></i>
                    </div>
                    <p className="skill-sub-title">
                        {data.skillSubTitle2}
                    </p>
                    <ul className="unordered-list-no-style skill-description">
                        <li>Java</li>
                        <li>Swift</li>
                        <li>Kotlin</li>

                    </ul>
                </div>
            </section>
        );
    }
}