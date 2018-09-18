import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ProjectsCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel" showThumbs={false}>
                <div>
                    <img src={require("../Assets/img/nightcover.png")} alt="NightBall Game" />
                    <p className="legend">NightBall</p>
                </div>
                <div>
                    <img src={require("../Assets/img/loologo.png")} alt="EmployAbility/BetterPD" />
                    <p className="legend">EmployAbility/BetterPD</p>
                </div>
                <div>
                    <img src={require("../Assets/img/altocumulus.jpg")} alt="Altocumulus Industries" />
                    <p className="legend">Altocumulus Industries</p>
                </div>
            </Carousel>
        );
    }
};


export default ProjectsCarousel;
