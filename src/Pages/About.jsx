import React, { useState } from "react";
import "../css/About.css"
import { BsGithub } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { ImLinkedin } from "react-icons/im"
import Modal from "../components/Modal";



const About = () => {

    const [modal, setModal] = useState(false) //don't want it to render initially.

    return (
        <div className="aboutContainer">

            <div className="linkBtns">
                <a href="https://github.com/M-Rozell" className="githubBtn"><BsGithub /></a>
                <a href="mailto: maggiemagnum@gmail.com" className="emailBtn"><AiOutlineMail /></a>
                <a href="https://www.linkedin.com/in/maggie-rozell/" className="linkedinBtn"><ImLinkedin /></a>
            </div>


            <div className="resume">

                <div className="objective">
                    {/* <text className="careerObjective">Career Objective</text> */}
                    <p className="pObjective">
                        Recent Innovate Birmingham Full-Stack Web Development graduate with a
                        passion for scalable web applications and working across the full stack. I
                        enjoy problem solving in a fast paced working environment. I am looking
                        forward to growing my career and learning with an innovative company
                        in the Birmingham area. I completed a fully remote 14 week full stack development program through Innovate
                        Birmingham that ended in mid April 2022. I completed 30 projects as well as a final
                        group project with presentation. All of my project repositories can be viewed on my github.
                        I am currently continuing my training with a focus on authentication and authorization
                        as well as taking an introductory Python course.
                    </p>


                    <div className="certifications">
                        <div className="txtCertifications">Certifications:</div>
                        <ul className="certList">
                            <li>Innovate Birmingham Full-Stack Web Development</li>
                            <li> Agile Education Registered Scrum Master</li>
                            <li> Agile Education Registered Product Owner</li>
                            <li> AIDT Certified Leader</li>
                            <li> Florida Atlantic University certificate in Hospitality and Tourism Management</li>
                        </ul>
                    </div>


                    <div className="education">
                        <div className="txtEducation">Education:</div>
                        <ul className="educationList">
                            <li>Innovate Birmingham: Web-Dev</li>
                            <li>UAH: BFA (Graphic Design)</li>
                            <li>FAU: Hospitality and Tourism Management</li>
                        </ul>
                    </div>

                    <button id="modalBtn"
                        onClick={() => { setModal(true) }}>
                        Click for list of skills</button>
                    {modal && <Modal closeModal={setModal} />}
                    {/* if modal is true then render component */}

                </div>
            </div>
        </div>
    )
}

export default About;