
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import Modal from "../components/Modal";
import "../css/About.css";



const About = () => {

    const [modal, setModal] = useState(false); //don't want it to render initially.

    

    return (

        <div className="aboutApp">

            <div className="aboutContainer" >


                
                <h3 className="aboutTitle">About</h3>
                {/* <div className="linkBtns">
                    <a href="https://github.com/M-Rozell" id="githubBtn"><BsGithub /></a>
                    <a href="mailto: maggiemagnum@gmail.com" id="emailBtn"><AiOutlineMail /></a>
                    <a href="https://www.linkedin.com/in/maggie-rozell/" id="linkedinBtn"><ImLinkedin /></a>
                </div> */}

                {modal && <Modal closeModal={setModal} />}
                {/* if modal is true then render component */}

                <div className="resume" >

                    <div className="objective">
                        {/* <text className="careerObjective">Career Objective</text> */}
                        <p className="pObjective">
                            Hi! Maggie Rozell here. I am a full-stack web developer with a focus on UX/UI design and
                            a background in graphic design. I enjoy problem solving in a fast paced working environment and am looking
                            forward to growing my career with an innovative company in the Birmingham area. All of my project repositories can be viewed on my github M-Rozell.
                            I am currently continuing my training with a focus on authentication and authorization
                            as well as taking Python courses.
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

                        {/* <div className="btnDiv">
                            <button id="modalBtn"
                                onClick={() => { setModal(true) }}>
                                Click for list of skills</button>
                        </div> */}
                    </div>
                    <div className="scrollIcons">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


