import React, { Component } from 'react';
import Header from './header';

class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>
            {this.props.title}
          </h1>
          <img width={1000} height={400} alt="NightBall" src={require("../Assets/img/" + this.props.image)} />

        </div>
      </div>
    );
  }
}

export default Projects;
