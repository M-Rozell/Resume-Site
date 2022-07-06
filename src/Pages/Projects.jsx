
import React, { useState } from 'react'
import '../css/Projects.css'
import TTTModal from '../components/TTTModal'

function Projects() {
  const [tttmodal, setTTTModal] = useState(false)
  return (
    <div className='projectsContainer'>
      <div className='projectsBtns'>
        <button className='tttBtn' onClick={() => { setTTTModal(true) }}>Tic Tac Toe</button>
      </div>
      {tttmodal && <TTTModal closeModal={setTTTModal} />}

    </div>
  )
}

export default Projects;
