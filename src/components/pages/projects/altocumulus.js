import React, { Component } from 'react';
import ProjectTemplate from '../../projectTemplate';

class Altocumulus extends Component {
  render() {
    return (
      <div>
        <ProjectTemplate title='Altocumulus Industries' image='altocumulus.jpg'/>

        <div className="container-fluid project-page">
          <h3>Inspiration</h3>
          <p>
            We wanted to make full use of the machine learning APIs that were available to us, and thought that being able to identify images, of those of your friends or even coworkers, would be a great application of the technology we could build during this hackathon.
          </p>
          <h3>What it does</h3>
          <p>
            Our machine learning application allows you to upload pictures of your friends, and by uploading an image of one of your friends, or a video turned into still images, to be able to detect which of your friends is in the picture. This could even be further extended to identifying which celebrity you look the most like!
          </p>
          <h3>How we built it</h3>
          <p>
            We used Python and Indicoio for the backend, which provided us with the support for the machine learning API provided by Indicoio to power or facial recognition software. Facial localization allows the face to be isolated in the image, which can then be compared to a trained dataset of images to determine who the face looks the most like. A website frontend will allow us to host this online for public use.
          </p>
          <h3>Challenges we ran into</h3>
          <p>
            Setting up the required modules was the first big hurdle we faced, but by working together and asking from mentors, we were able to set up the required modules and Indicoio to get our project rolling. The cropped images we had lead to another problem, as they were not saved in the required format by default. However, by importing modules to make the image files consistent, we were able to complete our dataset and make sure our machine learning facial recognition software ran smoothly and accurately.
          </p>
          <h3>Accomplishments that we're proud of</h3>
          <p>
            Having a beautifully designed frontend website, complemented by a functional and documented backend create a finished product that showcases our machine learning application to its full potential in a way that we can't help but be proud of.
          </p>
          <h3>What we learned</h3>
          <p>
            Combining frontend and backend for a functional product, and exploring the world of possibilities allowed by machine learning APIs.
          </p>
          <h3>What's next for Altocumulus Industries</h3>
          <p>
            Altocumulus Industries hopes to provide solutions to real world security and cognizant problems, and continue to make our product better.
          </p>
          <div class ="link-area">
            <a type="button" class="btn btn-default btn-lg" href="https://github.com/ddlan/enghack2018">
              View on GitHub <img width={50} height={50} alt="GitHub" src={require("../../../Assets/img/github logo.png")} />
            </a>
            <a type="button" class="btn btn-default btn-lg" href="https://devpost.com/software/altocumulus-industries">
              View on DevPost <img width={60} height={50} alt="Devpost" src={require("../../../Assets/img/devpost.png")} />
            </a>
            <a type="button" class="btn btn-default btn-lg demo-button" href="https://s3-ap-northeast-1.amazonaws.com/altocumulusindustriesenghacks/index.html">
              Try the Demo
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default Altocumulus;
