import React, { Component } from 'react';
import Header from '../header';

class Music extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="music">
          <div className="container-fluid">
            <h2>Black Star - Acoustic Radiohead Cover</h2>
            <h4>Aug 30, 2020</h4>
            <div className="video-mask">
              <iframe className='music-video'
                      src="https://www.youtube.com/embed/WxOwDSKDy0A" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen>
              </iframe>
            </div>

            <p>My acoustic cover of Black Star by Radiohead, from their album The Bends (1995).
              <br /><br />
              &emsp;&emsp;This cover was a lot of fun to record! It was the first time I recorded a full length acoustic cover, so I had to learn how to properly record vocals and guitar at the same time. I used a Shure SM57 microphone, a Fender CC-60SCE Concert Acoustic Guitar, and a Scarlett Focusrite 2i2 3rd gen. Learning to play and sing to a metronome also took lots of practice to get right. I started off using Audacity to master the audio, but I felt like it didn't have enough features so I switched to Reaper to do the final mastering. In the end, although the recording is not perfect, I am happy that I was able to finish a recording and publish it during the quarantine. I feel accomplished and happy that I was able to make the most out of being stuck at home and learn something new.
            </p>
          </div>
        </div>
        <div className="music">
          <div className="container-fluid">
            <h2>Stand By Me Demo</h2>
            <h4>Aug 25, 2019</h4>
            <div className="video-mask">
              <video className="music-video" controls>
                <source src={require("../../Assets/vid/standbyme-beneking-demo.mp4")} type="video/mp4" />
              Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
