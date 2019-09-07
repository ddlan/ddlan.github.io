import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const capStyle = {
  textShadow: '2px 2px 2px black',
};

class ProjectsCarousel extends Component {
    render() {
        return (
          <Carousel>
            <Carousel.Item>
              <img alt="InCite" src={require("../Assets/img/incitebanner.png")} />
              <Link onClick={this.forceUpdate} to="/Projects/InCite">
                <Carousel.Caption style={capStyle}>
                  <h3>InCite</h3>
                  <p>Citations on the fly. One click citations right in your browser. (React, Mobx, JS)</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="NightBall" src={require("../Assets/img/nightcover.png")} />
              <Link onClick={this.forceUpdate} to="/Projects/NightBall">
                <Carousel.Caption style={capStyle}>
                  <h3>NightBall</h3>
                  <p>Groove to the beat while you match colours in this arcade game! (Swift)</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Altocumulus Industries" src={require("../Assets/img/altocumulus.jpg")} />
              <Link onClick={this.forceUpdate} to="/Projects/Altocumulus">
                <Carousel.Caption style={capStyle}>
                  <h3>Altocumulus Industries</h3>
                  <p>Machine Learning Facial Recognition to find friends in a crowd. (Python/AWS)</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          </Carousel>
        );
    }
};


export default ProjectsCarousel;
