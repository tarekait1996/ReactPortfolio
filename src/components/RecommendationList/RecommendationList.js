import React from "react";
import Recommendation from './../Recommendation/Recommendation'
import "./RecommendationList.css";

export default class RecommendationList extends React.Component {
  render() {
    var paragraph= "I had the pleasure of managing Tarek during a co-op term and am pleased to say that Tarek is a driven, curious and engaged individual. He consistently seeks to challenge himself in areas of unknown and pushes himself to always learn more. He is dependable, mature, and is innovative in his thinking. He was a great addition to the team and look forward to having him back for another co-op term. Great job Tarek!";
    var paragraph2="I really enjoyed having Tarek in my team. His positive attitude really makes working with him a pleasure. Tarek is dependable and consistently follows through staying committed to get the job done. He is always eager and willing to add to his knowledge base and skills. Keep it up!";
    return (
      <section className="recommendation-list-container">
      <h2>What People Think of Me</h2>
      <hr className="is-hr-summary"></hr>
      <div className="recommendation-list-content">
        <Recommendation className= "recommendation" image = "https://playjoor.com/assets/avatar/elliot.jpg" name= "Christopher Cianci" paragraph={paragraph} position= "Project Manager at SLF"/>
        <Recommendation className= "recommendation" image = "https://playjoor.com/assets/avatar/mark.png" name= "Razvan Gazinschi" paragraph={paragraph2} position= "Mobile Developer at SLF"/>
        {/* <Recommendation className= "recommendation" image = "https://playjoor.com/assets/avatar/matthew.png" name= "Federico" paragraph={paragraph} position= "Director at SLF"/>
        <Recommendation className= "recommendation" image = "https://playjoor.com/assets/avatar/joe.jpg" name= "Charles Meda" paragraph={paragraph} position= "Project Manager at SLF"/>
        <Recommendation className= "recommendation" image = "https://playjoor.com/assets/avatar/molly.png" name= "Jennifer " paragraph={paragraph2} position= "Scrum Master at SLF"/>
        */}
        </div> 
      </section>
    );
  }
}
