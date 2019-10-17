import React from "react";
import "./Projects.css";
import htnPhoto from "./htnPortfolio.png";
import devBlock from "./devBlock.png";
import twatter from "./twatterLogo.png";
import ProjectItem from "./../Project-item/Project-item";
import Bounce from 'react-reveal/Bounce';

export default class Project extends React.Component {
  render() {
    const htnString =
    "I had the privilege of being one of the 1,500 students selected to attend Canada's Biggest Hackathon at the University of Waterloo. During this 36 hours long hackathon, my team (four developers with different backgrounds/expertise including myself) created an Android application that would help people who have allergies. The app would allow a user to sign in and enter information regarding his allergies in his profile. Then, the user can take pictures from either the gallery or camera of a product ingredient label and know whether he could have an allergy to the product. The application uses OCR (Google AI Vision API) to analyze the photo selected as well as some data on the Firebase database that was set. Besides, the user can also find recipes of food that he wants and that does not contain an ingredient that he is allergic to.";
  const devBlockString = " During this 24 hours long hackathon, my team created a social platform for refugees. The Helping Hand website offers various useful information such as where a refugee could get free food, clothes, furniture and other free goods. To do this, we show a map with pins that represents where those goods are distributed. The prototype could be further expanded to offer alerts when new items are available, and more. We used the MEAN stack to build the website (MongoDB, ExpressJS, Angular, NodeJS).  ";
  const twatterString =
    " Twatter is a twitter-like social platform made for roasting. The objective of this social platform is to create a place where people can be roasted and post funny content. The Like is, in reality, a dislike and people are encouraged to troll in the comments. We worked in a group of 10 people and similarly to the Helping Hand, we also used the MEAN stack to build the website (MongoDB, ExpressJS, Angular, NodeJS). ";
     
    return (
      <section id = "experience" className="experience-container">
            <h2 className="experience-title">Projects</h2>
            <hr className="is-hr-summary" />
            <div className="experience-content">
            <div className="ExperienceItemDiv">
            <Bounce left>
              <ProjectItem
                projectTitle="AlertG - Hack The North 2019"
                projectDate = "September 13-15 2019"
                projectSubTitle="University of Waterloo, Ontario, Canada"
                projectDescription={htnString}
                image={htnPhoto}
                projectUrl = "https://github.com/Hambrsoom/AllergyApp"
              />
              </Bounce>
            </div>

            <div className="ExperienceItemDiv">
            <Bounce right>
              <ProjectItem
                projectTitle="Helping Hand - BlockHacks 2018 (Winner 1st place)"
                projectDate = "November 17-18 2018"
                projectSubTitle="University of Concordia, Quebec, Canada"
                projectDescription={devBlockString}
                image={devBlock}
                projectUrl = "https://github.com/imabhijit/BlocHacks18"
              />
              </Bounce>
            </div>

            <div className="ExperienceItemDiv">
            <Bounce left>
              <ProjectItem
                projectTitle="Twatter"
                projectDate = "February-May 2019"
                projectSubTitle="University of Concordia, Quebec, Canada"
                projectDescription={twatterString}
                image={twatter}
                projectUrl = "https://github.com/twatter-soen341/Twatter"
                
              />
              </Bounce>
            </div>
            </div>
      </section>
    );
  }
}
