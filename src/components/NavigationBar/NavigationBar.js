import React from "react";
import "./NavigationBar.css";
import logo from "./logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      color: "transparent"
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  listenScrollEvent = e => {
    if (window.scrollY > 200) {
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
          id="navbar"
          className={
            this.state.active ? "navbarMobileInactive" : "NavBar grid-container"
          }
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
          <div className="NavBarAnchorContainer">
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
          </div>
          <div className="NavBarBurgerMenu">
            <section
              className="titles NavigationTabAnchor"
              onClick={this.toggleClass}
            >
              <i className="fas fa-bars" />
            </section>
          </div>
        </nav>

        <div
          className={
            this.state.active ? "navbarMobileActive" : "navbarMobileInactive"
          }
        >
          <i className="fas fa-times" onClick={this.toggleClass}></i>
          <div className="navMenuMobile">
            <div className="">
              <a className="navmobilemenuitem" href="/">
                About me
              </a>
            </div>
            <div className="">
              <a className="navmobilemenuitem" href="/">
                Experience
              </a>
            </div>
            <div className="">
              <a className="navmobilemenuitem" href="/">
                Portfolio
              </a>
            </div>
            <div className="">
              <a className="navmobilemenuitem" href="/">
                Say Hi
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
