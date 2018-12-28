import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

import Resume from '../../Assets/DannyLanResume.pdf';
import ProjectsCarousel from '../projectsCarousel';
import Header from '../header';

class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <Header />
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
          <NavLink to={Resume} target='_blank' className='btn btn-lg nav-link'>See Resume</NavLink>
        </div>

        <div className="media">
          <ProjectsCarousel class="carousel" />
        </div>

        {/*<div className="container project-row">
          <div className="container project">
            aa
          </div>
          <div className="container project">
            aa
          </div>
          <div className="container project">
            aa
          </div>
        </div>*/}

        <div className="media">
          <Player
            playsInline
            poster={require("../../Assets/img/nightcover2.png")}
            src="http://www.dannylandev.com/wp-content/uploads/2018/05/NightBall.mp4"
          />
      </div>
      </div>
    );
  }
}

export default Homepage;
