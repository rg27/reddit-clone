import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';



/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../assets/images/logo-icon.png';
// import logolighticon from '../../assets/images/logo-light-icon.png';
// import logodarktext from '../../assets/images/logo-text.png';
// import logolighttext from '../../assets/images/logo-light-text.png';

const Header = () => {

    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  

    return (
        <div>
           
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img className="imgLogo" src={logodarkicon} /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className="op360" href="/">Office Partners 360</NavLink>
                </NavItem>
              </Nav>
              <NavbarText className="op360">OP360 Year End Event</NavbarText>
            </Collapse>
        </Navbar>
                 
       
      </div>
    );
}
export default Header;
