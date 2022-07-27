
import React, { useState, useRef } from "react";
import Projects from "./Projects";
import About from "./About";
import "../css/Home.css";
import { TbArrowBigUpLines } from "react-icons/tb"
import Skills from "./Skills";






const MainHome = () => {

    // const [about, setAbout] = useState(false);
    // const [projects, setProjects] = useState(false);
    const aboutSection = useRef(null);
    const projectsSection = useRef(null)
    const skillsSection = useRef(null)

    const scrollDownAbout = () => {
        window.scrollTo({
            top: aboutSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const scrollDownProjects = () => {
        window.scrollTo({
            top: projectsSection.current.offsetTop,
            behavior: 'smooth',
        })
    }

    const scrollDownSkills = () => {
        window.scrollTo({
            top: skillsSection.current.offsetTop,
            behavior: 'smooth',
        })
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // function ogHome() {
    //     setAbout(false)
    //     setProjects(false)
    // };

    // function ogAbout() {
    //     setAbout(true)
    //     setProjects(false)
    // };

    // function ogProjects() {
    //     setProjects(true)
    //     setAbout(false)
    // };




    return (
        <div className="app" >



            <div className="appContainer">
                
                <div className="section section1">
                    
                    <div className="buttons">
                        {/* <button className="mainHomeBtn homeBtn" onClick={() => { ogHome() }}>Home</button>
                        <button className="mainHomeBtn aboutBtn" onClick={() => { ogAbout() }}>About</button>
                        <button className="mainHomeBtn projectBtn" onClick={() => { ogProjects() }}>Projects</button> */}
                       
                         <li className="mainHomeBtn aboutBtn " onClick={scrollDownAbout}>About</li>
                        <li className="mainHomeBtn projectBtn " onClick={scrollDownProjects}>Projects</li>
                        <li className="mainHomeBtn skillsBtn " onClick={scrollDownSkills}>Skills</li>
                    </div>

                    <div className="mainHomecontainer ">

                        <div className="nameBox">
                            <p className="name fade-in-text">Maggie Rozell</p>
                            {/* <p className="fullStack fade-in-text">Full-Stack Developer</p> */}
                        </div>
                    </div>

                    {/* <div className="justTry">
                    <Skills />
                </div> */}

                    {/* {about && <About />}
                {projects && <Projects />} */}
                </div>

            </div>
            
            
            <div className="section section2" ref={aboutSection}>
                
                <About />
                
                <div className="arrowUp">
                    <TbArrowBigUpLines
                        className='arrowBtn icon-position'
                        onClick={goToTop}
                    />
                </div>
            </div>


            <div className="section section3" ref={projectsSection}>

            
                <Projects />
                <div className="arrowUp">
                    <TbArrowBigUpLines
                        className='arrowBtn icon-position'
                        onClick={goToTop}
                    />
                </div>
            </div>

            <div className="section section4" ref={skillsSection}>
                <h1 className="skillsTitleHome">Skills</h1>
                <div className="section4Container">

                    <div className="justTry">
                        <Skills />
                    </div>
                </div>
                <div className="arrowUp">
                    <TbArrowBigUpLines
                        className='arrowBtn icon-position '
                        onClick={goToTop}
                    />
                </div>

            </div>

        </div>
    )
}

console.log('home');
export default MainHome;

