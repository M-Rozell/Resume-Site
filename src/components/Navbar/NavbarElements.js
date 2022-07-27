
import styled from 'styled-components'
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
background: gray;
height: 80px;
// margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index:20;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
color: red;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 35%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #F7EF8A;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
display: flex;
align-items: center;
`

export const NavLinks = styled(LinkScroll)`
/* color: #fff;
display: flex;
align-items: center;
text-decoration: none;

height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
} */

appearance: button;

text-decoration: none;
display: flex;
align-items: center;
padding: 0 1rem;
  
background-color: #95bb93;
  background-image: none;
  border: 1px solid #45ffc7;
  border-radius: 4px;
  box-shadow: cornsilk 4px 4px 0 0, #45ffc7 4px 4px 0 1px;
  box-sizing: border-box;
  color: #F7EF8A;
  cursor: pointer;
  display: inline-block;
  /* font-family: ITCAvantGardeStd-Bk,Arial,sans-serif; */
  font-size: .75rem;
  /* font-weight: 400; */
  line-height: 20px;
  margin: 0 10px 10px 0;
  overflow: visible;
  text-align: center;
  text-transform: none;
  /* touch-action: manipulation; */
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  padding: 5px 12px;


  &:focus {
    outline: none ! important;
  text-decoration: none;
  color: cornsilk;
  border-color: cornsilk;
  box-shadow: 4px 4px 0 1px cornsilk;
  /* box-shadow: 0 0 10px cornsilk; */
  }

&:hover {
    text-decoration: none;
  color: cornsilk;
}
  
&:active {
    box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
  }

&:not([disabled]):active {
  box-shadow: cornsilk 2px 2px 0 0, #F7EF8A 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .mainHomeBtn {
    padding: 8px 25px;
  }
}


`