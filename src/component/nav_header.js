import React, {useState} from 'react';



import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  const NavMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="nav_header border-white">
            <Nav className="justify-content-center">
                <NavItem>
                    <NavLink className="text-white active" href="#banner">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#our_features">OUR FEATURES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#about_us">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#our_service">OUR SERVICES</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#testimonials_sec">TESTIMONIALS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#contact_sec">CONTACT US</NavLink>
                </NavItem>
            </Nav>
        </div>
    );

}
export default  NavMenu;