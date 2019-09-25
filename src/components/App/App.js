import React from "react";
import "./App.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import LandingLayout from "./../LandingLayout/LandingLayout";
import Summary from "./../Summary/Summary";
import Experience from "./../Experience/Experience";
// import Projects from "./../Projects/Projects";
import Footer from './../Footer/Footer';
import Education from './../Education/Education';
import Contact from './../Contact/Contact'
import Quote from './../Quote/Quote';
import RecommendationList from './../RecommendationList/RecommendationList';
function App() {
  return (
    <div className="all">
      <NavigationBar />
      <LandingLayout />
      <div className="whiteDiv">
        <Summary />
        <Experience />
        <Education/>
        {/* <Project/> */}
        <RecommendationList/>
        <Quote/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
