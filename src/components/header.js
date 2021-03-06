import React, { useState } from 'react';
import Timer from "./timer";
import Logo from "../assets/images/download.png"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
    NavbarBrand
} from 'reactstrap';
    const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="backgroundHeader"> 
        <Navbar color="" dark expand="md">
        <NavbarBrand  href="/"> 
          <img 
            className="logoImg"
            src={Logo}
          />
          </NavbarBrand>
            {/* <NavbarToggler   onClick={toggle} /> */}
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                </NavItem>
              </Nav>

              <Nav className="" navbar>
                <NavItem>
                  {/* <NavbarText className="timer"><Timer/></NavbarText> */}
                </NavItem>
              </Nav>
            
             
            </Collapse>
        </Navbar>
      </div>
    );
}
export default Header;
