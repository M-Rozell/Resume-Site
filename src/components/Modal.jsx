import React from 'react'
import "../css/Modal.css"

function Modal({ closeModal }) {  //prop closeModal

    return (
        <div className='modalBg'>
            <div className='modalContainer'>
                <div className='titleCloseBtn' >
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <div>Skills</div>
                </div>

                <div className='modalBody'>
                    <div className='modalList'>
                        <div>Javascript HTML CSS JQuery MySQL</div>
                        <div>React NodeJS Express Bootstrap FlexBox</div>
                        <div>VS Code Git/Github Postman</div>
                        <div>Figma Photoshop Illustrator InDesign</div>
                        <div>Word Powerpoint Excel</div>
                      </div>  
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Close</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal