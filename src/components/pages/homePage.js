import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
          <img className="splash-face" src={require("../../Assets/img/sfcoolcrop.jpg")} alt="Me!"></img>

        </div>
        <div className="container-fluid home-about">
          <h1>About Me</h1>

          <p>&emsp;&emsp;Hi, my name is Danny Lan and I am a third year student studying Computer Science and Business Administration at the University of Waterloo and Wilfrid Laurier University. I am interested in mobile and web development, and have created apps and games for iOS, Android, and the Chrome Web Store. In my free time, I play the acoustic guitar, bass, and ukulele. I do Muay Thai and go to the gym regularly. I also involve myself in theatre.</p>
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

        <div className="promo">
          <h1>NightBall Promotional Video</h1>
          <video className="promo-video" controls>
            <source src={require("../../Assets/vid/NightBallCrop2.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
}

export default Homepage;
