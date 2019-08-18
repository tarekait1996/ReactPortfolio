import React from 'react';
import './NavigationBar.css'
export default class NavigationBar extends React.Component {
    state = {
        color: 'transparent'
      }
    
    listenScrollEvent = e => {
        if (window.scrollY > 200) {
            this.setState({color: 'white'})
        } else {
            this.setState({color: 'transparent'})
        }
    }
    
      componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        return (
            <div className = "NavContainer" style={{backgroundColor: this.state.color}}>
                <nav id = "navbar" className = "NavBar grid-container">
                    <div><a className = "titles NavigationTabAnchor" href= "/#">Tarek Ait Hamouda</a></div>
                    <div className = "NavBarAnchorContainer"><a className = "titles NavigationTabAnchor" href="/">About me</a></div>
                    <div className = "NavBarAnchorContainer"><a className = "titles NavigationTabAnchor" href="/">Experience</a></div>
                    <div className = "NavBarAnchorContainer"><a className = "titles NavigationTabAnchor" href="/">Portfolio</a></div>
                    <div className = "NavBarAnchorContainer"><a className = "titles NavigationTabAnchor" href="/">Contact me</a></div>
                    <div className = "NavBarBurgerMenu"><a className = "titles NavigationTabAnchor" href="/"><i class="fas fa-bars"></i></a></div>
                    
                    
                </nav>
            </div>
        );
    }
}