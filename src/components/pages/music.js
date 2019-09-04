import React, { Component } from 'react';
import Header from '../header';

class Music extends Component {
  render() {
    return (
      <div className="music">
        <Header />
        <div className="container-fluid">
          <h1>Stand By Me Demo</h1>
          <h3>Aug 25, 2019</h3>
          <video className="music-video" controls>
            <source src={require("../../Assets/vid/standbyme-beneking-demo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
}

export default Music;
