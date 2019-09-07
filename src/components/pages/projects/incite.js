import React, { Component } from 'react';
import ProjectTemplate from '../../projectTemplate';

class InCite extends Component {
  render() {
    return (
      <div>
        <ProjectTemplate title='InCite' image='incitebanner.png'/>

        <div className="container-fluid project">
          <p>
          InCite is a Google Chrome extension I developed in collaboration with a graphic designer and another software developer. InCite allows you to generate a citation for your current webpage in MLA, APA, Chicago, or Harvard citation styles at the click of a button. You can save multiple bibliographies and copy the bibliography to your clipboard.
          </p>
          <br />
          <p>
          InCite was built using React and MobX. It uses a metascraper package created by metrolink to get citation information from the current webpage. InCite then processes the information into a citation that can be edited later as needed. InCite uses local storage to persist bibliographies. Future planned updates include shared bibliographies and support for citations of non-web sources.
          </p>
          <br />
          <p>
          Working on InCite taught me the importance of setting clear timelines and goals to keep progress moving steadily. Coordinating the team was a challenge because during development we were all living in different places, so working remotely was the only option. It became easy to deprioritize working on InCite when there were also assignments, midterms, exams, and job applications to worry about. However, after we decided to have biweekly video chat meetings, our progress increased slowly and steadily until we finished the project. The use of consistent meetings helped to set goals for the next period, and to ensure we always made our way one step closer to the finished product, as no one wants to show up to the meeting without having made any progress. In the end, the development cycle took around 10 months, and I am very satisfied with the end product.
          </p>
        </div>
      </div>
    );
  }
}

export default InCite;
