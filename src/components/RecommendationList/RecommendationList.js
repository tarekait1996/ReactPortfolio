import React from "react";
import Recommendation from "./../Recommendation/Recommendation";
import "./RecommendationList.css";

export default class RecommendationList extends React.Component {
  render() {
    var paragraph =
      "I had the pleasure of managing Tarek during a co-op term and am pleased to say that Tarek is a driven, curious and engaged individual. He consistently seeks to challenge himself in areas of unknown and pushes himself to always learn more. He is dependable, mature, and is innovative in his thinking. He was a great addition to the team and look forward to having him back for another co-op term. Great job Tarek!";
    var paragraph2 =
      "I really enjoyed having Tarek in my team. His positive attitude really makes working with him a pleasure. Tarek is dependable and consistently follows through staying committed to get the job done. He is always eager and willing to add to his knowledge base and skills. Keep it up!";
    var paragraph3 =
      "I had the pleasure to have Tarek in my team for two internships while he was a student at Concordia University. He is a quick learner, outspoken, reliable, and always delivers quality work. He demonstrated flexibility while being assigned to different teams and tasks, and was always able to meet his deadlines. He learnt or improved his iOS, Android and Agile skills with no difficulty, but above all is a team player. I can say without any doubt that Tarek is a young professional that any organization would like to have, as he demonstrates skills that are key for success, and to drive things forward. I am really looking forward to having the chance to work with him in the near future. Keep it up Tarek!";
    return (
      <section id="recommendation" className="recommendation-list-container">
        <h2>What People Think of Me</h2>
        <hr className="is-hr-summary"></hr>
        <div className="recommendation-list-content">
          <Recommendation
            className="recommendation"
            image="https://playjoor.com/assets/avatar/matthew.png"
            name="Federico Cánovas Peña, MBA, PMP, B.Eng."
            paragraph={paragraph3}
            position="Executive Director - Digital Innovation at SLF"
          />
          <Recommendation
            className="recommendation"
            image="https://playjoor.com/assets/avatar/elliot.jpg"
            name="Christopher Cianci"
            paragraph={paragraph}
            position="Practice Manager, Mobile CoE at SLF"
          />
          <Recommendation
            className="recommendation"
            image="https://playjoor.com/assets/avatar/mark.png"
            name="Razvan Gazinschi"
            paragraph={paragraph2}
            position="Mobile Application Developer at SLF"
          />
        </div>
      </section>
    );
  }
}
