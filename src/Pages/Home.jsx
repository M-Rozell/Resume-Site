
import React, { useState } from "react";
import "../css/Home.css"
import About from "./About";
import Projects from "./Projects";

const Home = () => {

    const [about, setAbout] = useState(false)
    const [projects, setProjects] = useState(false)

    function ogHome() {
        setAbout(false)
        setProjects(false)
    }

    function ogAbout() {
        setAbout(true)
        setProjects(false)
    }

    function ogProjects() {
        setProjects(true)
        setAbout(false)
    }
    return (
        <div className="app" >

            <div className="buttons">
                <button className="btn homeBtn" onClick={() => { ogHome() }}>Home</button>
                <button className="btn aboutBtn" onClick={() => { ogAbout() }}>About</button>
                <button className="btn projectBtn" onClick={() => { ogProjects() }}>Projects</button>
            </div>

            <div className="container ">

                <div className="nameBox">
                    <p className="name fade-in-text">Maggie Rozell</p>
                    <p className="fullStack fade-in-text">Full-Stack Developer</p>
                </div>
            </div>
            
            {about && <About />}
            {projects && <Projects />}
        
        </div>
    )
}

console.log('home')
export default Home;

