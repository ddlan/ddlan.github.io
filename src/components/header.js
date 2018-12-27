import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect className="header">
          <Navbar.Header>
            <Navbar.Brand>
              <div className="logo">
                <Link to="/">
                  <img src={require("../Assets/img/cheesewheel.png")} alt="logo"></img>
                </Link>
              </div>
              <Link to="/">
                <div className="header-name">
                  <h3>
                    Danny Lan
                  </h3>
                  <h6>
                    UWaterloo CS Student
                  </h6>
                </div>
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/about">About</Link>
              </NavItem>
              <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to="/projects/NightBall">NightBall</Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>
                  <Link to="/projects/BetterPD">BetterPD/EmployAbility</Link>
                </MenuItem>
                <MenuItem eventKey={3.3}>
                  <Link to="/projects/Altocumulus">Altocumulus Industries</Link>
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>In Progress</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2}>
                <Link to="/Contact">Contact</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
