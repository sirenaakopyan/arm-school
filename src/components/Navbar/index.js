import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Seattle Armenian School
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='school'>School</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='camp'>Camp</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='calendar'>Calendar</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='getInvolved'>Get Involved</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/enroll">Enroll</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;