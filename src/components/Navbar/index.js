import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'


function MainNavbar() {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>MR</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default MainNavbar;