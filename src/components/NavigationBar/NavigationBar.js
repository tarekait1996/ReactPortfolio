import React from "react";
import "./NavigationBar.css";
import logo from "./logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_class: "",
      color: "transparent"
    };
  }
  setToggleTopMenuClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled"
      });
    } else {
      this.setState({
        menu_class: ""
      });
    }
  };

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({
        color: "white",
        fontColor: "black",
        boxShadow: "0 2px 2px -2px rgba(0,0,0,.5)"
      });
    } else {
      this.setState({
        color: "transparent",
        fontColor: "white",
        boxShadow: ""
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    let top_menu_class = `top-menu ${this.state.menu_class}`;
    return (
      <div
        className="NavContainer"
        style={{
          backgroundColor: this.state.color,
          color: this.state.fontColor,
          boxShadow: this.state.boxShadow
        }}
      >
        <nav
          className={top_menu_class}
        >
          <div>
            <img id="logo" src={logo} alt="logo" />
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Main
            </Link>
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Link>
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Experience
            </Link>
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Projects
            </Link>
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Education
            </Link>
          </div>
          <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="recommendation"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Testimonials
            </Link>
          </div>
          {/* <div className="NavBarAnchorContainer">
            <Link
              className={
                this.state.fontColor === "black"
                  ? "NavigationTabAnchor black-titles"
                  : "NavigationTabAnchor white-titles"
              }
              activeClass="active"
              to="contact-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Say Hi
            </Link>
          </div> */}
          <div className="NavBarBurgerMenu">
            <section
            className={
              this.state.fontColor === "black"
                ? "top-menu-icon NavigationTabAnchor black-titles"
                : "top-menu-icon NavigationTabAnchor white-titles"
            }
            onClick={this.setToggleTopMenuClass}
            >
              <FontAwesomeIcon 
              className={
              this.state.fontColor === "black"
              ? "faBarsIconBlack"
              : "faBarsIconWhite"}
              icon={faBars} />
            </section>
          </div>
        </nav>
      </div>
    );
  }
}
