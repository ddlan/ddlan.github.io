import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={require("../../Assets/img/cheesewheel.png")}></img>
          </Link>
        </div>
        <div className="header-name">
          <h3>
            Danny Lan
          </h3>
          <h6>
            UWaterloo CS Student
          </h6>
        </div>

        <nav>
          <ul>
            <li className="first"><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li className="last"><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
