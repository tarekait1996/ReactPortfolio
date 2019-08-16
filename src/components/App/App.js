import React from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LandingLayout from "./../LandingLayout/LandingLayout";
import Summary from "./../Summary/Summary";
import SkillBox from "./../SkillBox/SkillBox";

function App() {
  return (
    <div className="all">
      <NavigationBar />
      <div className="DisplayLayout">
        <LandingLayout />
      </div>
      <div className = "whiteDiv">
      </div>
      <Summary/>
      <div className="skillBox-wrapper">
      <SkillBox title="Mobile Development"
       mainDescription="I value beautiful UI, UX and specifically clean code and architecture inside a native mobile App." 
       skillSubTitle="Platform I am familiar with"
       skillSubTitle2="Languages I speak"/>

       <SkillBox title="Web Development"
       mainDescription="I value beautiful UI, UX and specifically clean code and architecture inside a Website." 
       skillSubTitle="Platform I am familiar with"
       skillSubTitle2="Languages I speak"/>
       </div>
    </div>
  );
}
export default App;
