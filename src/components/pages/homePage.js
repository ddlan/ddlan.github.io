import React, { Component } from 'react';

class Homepage extends Component {
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
        <div className="container-fluid home-content">
          <h1>About Me</h1>

          <p>&emsp;&emsp;Hi, my name is Danny Lan and I am a second year student at the University of Waterloo and Wilfrid Laurier University. I am in the Double Degree program studying Computer Science and Business Administration. I am interested in mobile and web development, and have created apps and games for...</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
