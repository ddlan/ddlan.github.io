import React, { Component } from 'react';
import Header from './header';

class Projects extends Component {
  render() {
    return (
      <div className="project-template">
        <Header />
        <div className="container-fluid">
          <h1>
            {this.props.title}
          </h1>
          <img alt={this.props.title} src={require("../Assets/img/" + this.props.image)} />

        </div>
      </div>
    );
  }
}

export default Projects;
