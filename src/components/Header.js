import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";
import { faGithub, faForumbee } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapseOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar type="dark" theme="dark" expand="md">
          <NavbarBrand href="/">
            <FontAwesomeIcon icon={faForumbee} /> HUMMYBEE
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink active href="https://github.com/Ssnnaaiill/hummybee" target="_blank">
                  <Button theme="warning">
                    <strong>
                      <FontAwesomeIcon icon={faGithub} /> Github
                    </strong>
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}

export default Header;