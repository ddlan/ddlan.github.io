import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';

class Projects extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="container-fluid">
          <h1>
            Projects
          </h1>
          <ul className="list">
            <li><Link to="/Projects/NightBall">NightBall</Link></li>
            <li><Link to="/Projects/BetterPD">BetterPD/EmployAbility</Link></li>
            <Link to="/Projects/Altocumulus">Altocumulus Industries</Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
