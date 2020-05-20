import React from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LandingLayout from "./../LandingLayout/LandingLayout";
import Summary from "./../Summary/Summary";
import Experience from "./../Experience/Experience";
import Project from "./../Projects/Projects";
import Footer from './../Footer/Footer';
import Education from './../Education/Education';
import Contact from './../Contact/Contact'
import RecommendationList from './../RecommendationList/RecommendationList';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });
function App() {
  return (
    <div className="all">
      <NavigationBar />
      <LandingLayout />
      <div className="whiteDiv">
        <Summary />
        <Experience />
        <Project/>
        <Education/>
        <RecommendationList/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    </div>
  );
}
export default App;
