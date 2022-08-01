import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'


function MainNavbar({toggle}) {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo to='/'>MR</NavLogo>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    
                    <NavMenu>

                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>

                    </NavMenu>
                    
                    {/* <NavBtn>
                        <NavBtnLink to="signup">Sign Up</NavBtnLink>
                    </NavBtn> */}

                </NavbarContainer>
            </Nav>

        </>
    )
}

export default MainNavbar;