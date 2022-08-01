import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 20%;
height: 75%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
right: 0;
transition: 0.3s ease-in-out;

opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; //ternary (if else statement) can be used in styled components.

top: ${({ isOpen }) => (isOpen ? '0' : '-100')};

`

export const SidebarCloseIcon = styled(FaTimes)`
color: #fff;
`

export const SidebarIcon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 10px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 10px);
}
`

export const SidebarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`

// export const SideBtnWrap = styled.div`
// display: flex;
// justify-content: center;
// `

// export const SidebarRoute = styled(LinkRouter)`
// border-radius: 8px;
// background-color: #01bf71;
// white-space: nowrap;
// padding: 16px 64px;
// color: #010606;
// font-size: 1.5rem;
// outline: none;
// border: none;
// cursor: pointer;
// transition: all 0.5s ease-in-out;
// text-decoration: none;

// &:hover {
//     transition: all 0.5s ease-in-out;
//     background: #fff;
//     color: #010606;
// }
// `