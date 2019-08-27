import React from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LandingLayout from "./../LandingLayout/LandingLayout";
import Summary from "./../Summary/Summary";
import Experience from "./../Experience/Experience";
// import Projects from "./../Projects/Projects";
import Footer from './../Footer/Footer';
import Contact from './../Contact/Contact'
import RecommendationList from './../RecommendationList/RecommendationList';
function App() {
  const string1 =" As an IOS Developer, I participated in the development  of mobile application for internal and external clients. This allowed to to communicate with Project Managers, System Designers, Business System Analysts, Application analysts, and Testing Specialists to deliver high-quality solutions.I was also involved in projects from initiation to deployment, particularly during the development phase. I also participated in the discovery and evaluation of new technologies.";
  
  return (
    <div className="all">
      <NavigationBar />
      <LandingLayout />
      <div className="whiteDiv">
        <Summary />
        <Experience />
        <RecommendationList/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
