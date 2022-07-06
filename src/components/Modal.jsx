
import React from 'react'
import "../css/Modal.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

function Modal({ closeModal }) {  //prop closeModal

    return (
        <div className='container'>
            <div className='row'>
                <div className='modalBg col-sm-5'>

                    <div className='titleCloseBtn' >
                        <button onClick={() => closeModal(false)}><AiOutlineCloseCircle /></button>
                    </div>
                    <div className='title'>
                        <div>Skills</div>
                    </div>

                    <div className='modalBody'>
                        <div className='modalList'>
                            <div className='listOne'>
                                <ul>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>JQuery</li>
                                    <li>MySQL</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>

                            <div className='listTwo'>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>FlexBox</li>
                                    <li>Express</li>
                                    <li>NodeJS</li>
                                    <li>React</li>
                                </ul>
                            </div>

                            <div className='listThree'>
                                <ul>
                                    <li>Figma</li>
                                    <li>VS Code</li>
                                    <li>Postman</li>
                                    <li>Git/Github</li>
                                    <li>Powerpoint</li>
                                </ul>
                            </div>

                            <div className='listFour'>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>InDesign</li>
                                    <li>Word</li>
                                    <li>Excel</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='footer'>
                        <button onClick={() => closeModal(false)}>Close</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;