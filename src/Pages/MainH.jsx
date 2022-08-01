// import React from "react";
// import Projects from "./Projects";
// import About from "./About";
// import "../css/Home.css";
// import { TbArrowBigUpLines } from "react-icons/tb"
// import Skills from "./Skills";
// import "../css/MainH.css"
// import MainNavbar from "../components/MainNavbar";

// function MainH() {
//   return (
//     <div className="container">
        
//         <div className="section"></div>
//         <div className="section"></div>
//         <div className="section"></div>
//         <div className="section"></div>
//     </div>
//   )
// }

// export default MainH

import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import MainNavbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


function MainH() {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <MainNavbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
    </div>
  )
}

export default MainH