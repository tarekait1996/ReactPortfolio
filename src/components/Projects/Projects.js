import React from "react";
import "./Projects.css";
import htnPhoto from "./htnPortfolio.png";
import devBlock from "./devblockLogo.png";
import twatter from "./twatterLogo.png";
import conUmap from "./side_menu_logo.png";
import ProjectItem from "./../Project-item/Project-item";
import Bounce from 'react-reveal/Bounce';

export default class Project extends React.Component {
  render() {
    const htnString =
    "I had the privilege of being one of the 1,500 students selected to attend Canada's Biggest Hackathon at the University of Waterloo. During this 36 hours long hackathon, my team (four developers with different backgrounds/expertise including myself) created an Android application that would help people who have allergies. The app would allow a user to sign in and enter information regarding his allergies in his profile. Then, the user can take pictures from either the gallery or camera of a product ingredient label and know whether he could have an allergy to the product. The application uses OCR (Google AI Vision API) to analyze the photo selected as well as some data on the Firebase database that was set. Besides, the user can also find recipes of food that he wants and that does not contain an ingredient that he is allergic to.";
  const devBlockString = "During BlockHacks 2018 (24 hours long hackathon), my team created a social platform whose goal is to help refugees. The Helping Hand website offers various useful information such as where a refugee could get free food, clothes, furniture, and other free goods.";
  const twatterString =
    "Twatter is a twitter-like social platform made for roasting. The objective of this social platform is to create a place where people can post funny content and be roasted. The Like option is, in reality, a dislike, and people are encouraged to troll in the comments."
    const conUMapStr = 
    "ConUMaps is an Android application that allows students, staff, and visitors to find their way around Concordia's campuses. It supports both indoor and outdoor directions between campuses, buildings, and rooms. It equally shows indoor points of interest such as the nearest lounges and washrooms. The application can also provide directions for people with disabilities, as well as give directions in French or English depending on the user's settings. It is fully integrated with public transit options as well as Concordia's shuttle bus system.";
    return (
      <section id = "projects" className="experience-container">
            <h2 className="experience-title">Projects</h2>
            <hr className="is-hr-summary" />
            <div className="experience-content">
            <div className="ExperienceItemDiv">
            <Bounce left>
              <ProjectItem
                projectTitle="ConUMap - Mini Capstone"
                projectDate = "January 2020 - May 2020"
                projectSubTitle="Concordia University, Montreal, Canada"
                projectDescription={conUMapStr}
                utilized = "Java, Google Cloud Platform APIs, CircleCI, JUnit, Espresso, Jacoco, SonarQube"
                image={conUmap}
                projectUrl = "https://github.com/tarekait1996/Concordia-Campus-Guide"
              />
              </Bounce>
            </div>

            <div className="ExperienceItemDiv">
            <Bounce left>
              <ProjectItem
                projectTitle="AlertG - Hack The North 2019"
                projectDate = "September 13-15 2019"
                projectSubTitle="University of Waterloo, Ontario, Canada"
                projectDescription={htnString}
                utilized = "Google Vision API, Firebase, Java"
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
                utilized= "MongoDB, ExpressJS, Angular, NodeJS (MEAN stack)"
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
                utilized= "MongoDB, ExpressJS, Angular, NodeJS"
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
