import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand className="NavbarBrand" id="navbarBrand" href="/">To-do-List-App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="NavLink" to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link className="NavLink" to='/about'>About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}