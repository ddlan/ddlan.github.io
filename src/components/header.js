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
              <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} href="/Projects/NightBall">
                  <Link to="/Projects/NightBall">NightBall</Link>
                </MenuItem>
                <MenuItem eventKey={2.2} href="/Projects/BetterPD">
                  <Link to="/Projects/BetterPD">BetterPD/EmployAbility</Link>
                </MenuItem>
                <MenuItem eventKey={2.3} href="/Projects/Altocumulus">
                  <Link to="/Projects/Altocumulus">Altocumulus Industries</Link>
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.4}>More to come...</MenuItem>
              </NavDropdown>
              <NavItem eventKey={1}>
                <Link to="/Music">Music</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;
