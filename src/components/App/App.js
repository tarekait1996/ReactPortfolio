import React from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LandingLayout from "./../LandingLayout/LandingLayout";
import Summary from "./../Summary/Summary";
import SkillBox from "./../SkillBox/SkillBox";
import Experience from "./../Experience/Experience";
import Projects from "./../Projects/Projects";
import Actuality from "../Actuality/Actuality";
import Footer from './../Footer/Footer';
import Contact from './../Contact/Contact'
import RecommendationList from './../RecommendationList/RecommendationList';
function App() {
  return (
    <div className="all">
      <NavigationBar />
      <LandingLayout />
      <div className="whiteDiv">
        <Summary />
        {/* <div className="skillBox-wrapper">
          <SkillBox
            title="Mobile Development"
            mainDescription="I value beautiful UI, UX and specifically clean code and architecture inside a native mobile App."
            skillSubTitle="Platform I am familiar with"
            skillSubTitle2="Languages I speak"
          />

          <SkillBox title="Web Development"
       mainDescription="I value beautiful UI, UX and specifically clean code and architecture inside a Website." 
       skillSubTitle="Platform I am familiar with"
       skillSubTitle2="Languages I speak"/>
        </div> */}
        <Experience />
        <Actuality /> 
        <RecommendationList/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
