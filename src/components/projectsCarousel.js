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
              <img width={2500} height={500} alt="NightBall" src={require("../Assets/img/nightcover.png")} />
              <Link to="/Projects/NightBall">
                <Carousel.Caption style={capStyle}>
                  <h3>NightBall</h3>
                  <p>Groove to the beat while you match colours in this arcade game! (Swift)</p>
                </Carousel.Caption>
              </Link>
              </Carousel.Item>
            <Carousel.Item>
              <img width={2500} height={500} alt="BetterPD/EmployAbility" src={require("../Assets/img/loologo.png")} />
              <Link to="/Projects/NightBall">
                <Carousel.Caption style={capStyle}>
                  <h3>BetterPD/EmployAbility</h3>
                  <p>Job search preparation for the busy university student. (Python, Flask, MySQL)</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <img width={2500} height={500} alt="Altocumulus Industries" src={require("../Assets/img/altocumulus.jpg")} />
              <Link to="/Projects/NightBall">
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
