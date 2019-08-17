import React from "react";
import "./Summary.css";

export default class Summary extends React.Component  {
    render() {
        return (
            <section className = "summary-container">
                <div className="summary-content">
                    <h1>Hi, I'm Tarek. Nice to meet you!</h1>
                    <hr className="is-hr-summary"/>
                    <p> I am a software engineer student at Concordia University who enjoys coding. 
                        I completed two work term during my bacheaulor which gave me hands on experience
                        with Android and IOS mobile development. I'm dependablem naturally curious and always
                         looking for new challenges and opportunity. 
                         I am a software engineer student at Concordia University who enjoys coding. 
                        I completed two work term during my bacheaulor which gave me hands on experience
                        with Android and IOS mobile development. I'm dependablem naturally curious and always
                         looking for new challenges and opportunity.</p>
                </div>
            </section>
        );
    }
}
