import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


import Resume from '../../Assets/DannyLanResume.pdf'
import ProjectsCarousel from "../projectsCarousel.js"

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="splash">
          <h1 className="splash-text">Developer. Designer. Danny.</h1>
          <svg className="slant" viewBox="0 0 1 1" preserveAspectRatio="none">
            <polygon points="0,1 1,1 1,0"></polygon>
          </svg>
          <img className="splash-face" src={require("../../Assets/img/smalleruke.jpg")} alt="Me!"></img>

        </div>
        <div className="container-fluid home-about">
          <h1>About Me</h1>

          <p>&emsp;&emsp;Hi, my name is Danny Lan and I am a second year student studying Computer Science and Business Administration at the University of Waterloo and Wilfrid Laurier University. I am interested in mobile and web development, and have created apps and games for iOS, Android, and the Web. In my free time, I like to draw, play acoustic guitar and ukulele, and game. I also involve myself in theatre.</p>
          <NavLink to={Resume} target='_blank' className=' btn  btn-outline-dark btn-lg nav-link'>See Resume</NavLink>
        </div>

        <ProjectsCarousel />
      </div>
    );
  }
}

export default Homepage;
