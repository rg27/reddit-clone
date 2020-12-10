import React, { useState } from 'react';
import Timer from "./timer";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
    const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="" dark expand="md">
            <NavbarToggler   onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className="" href="/">  <Button className="b1" color="danger">Office Partners 360</Button></NavLink>
                </NavItem>
              </Nav>
              <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink className="" ><Timer/></NavLink>
                </NavItem>
              </Nav>
              <NavbarText className=""><Button className="b1" color="danger">OP360 Year End Event</Button></NavbarText>
            </Collapse>
        </Navbar>
      </div>
    );
}
export default Header;
