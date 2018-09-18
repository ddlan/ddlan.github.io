import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header style={this.props.homepage ? {"backgroundColor": "rgba(0,0,0,0)"} : {"backgroundColor": "rgba(0,0,0,1)"}}>
        <div className="logo" onClick={() => this.props.handler(this, true)}>
          <Link to="/">
            <img src={require("../Assets/img/cheesewheel.png")} alt="logo"></img>
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
            <li className="first" onClick={() => this.props.handler(this, true)}><Link to="/">Home</Link></li>
            <li onClick={() => this.props.handler(this, false)}><Link to="/About">About</Link></li>
            <li onClick={() => this.props.handler(this, false)}><Link to="/Blog">Blog</Link></li>
            <li onClick={() => this.props.handler(this, false)}><Link to="/Projects">Projects</Link></li>
            <li className="last" onClick={() => this.props.handler(this, false)}><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
