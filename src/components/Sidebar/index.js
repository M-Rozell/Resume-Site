import React from 'react'
import { SidebarContainer, SidebarIcon, SidebarCloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>

                <SidebarIcon onClick={toggle}>
                    <SidebarCloseIcon />
                </SidebarIcon>

                <SidebarWrapper>

                    <SidebarMenu>
                        <SidebarLink to='about'onClick={toggle}>About</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    </SidebarMenu>


                    <SidebarMenu>
                        <SidebarLink to='skills' onClick={toggle}>Skills</SidebarLink>
                    </SidebarMenu>

                    {/* <SidebarMenu>
                        <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                    </SideBtnWrap> */}

                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;