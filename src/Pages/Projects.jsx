
import React, { useState } from 'react'
import '../css/Projects.css'
import TTTModal from '../components/TTTModal'
import TaskModal from '../components/TaskModal'
import WeatherModal from '../components/WeatherModal'

function Projects() {
  const [tttmodal, setTTTModal] = useState(false)
  const [task, setTask] = useState(false)
  const [weatherBtn, setWeatherBtn] = useState(false)
  return (
    <div className='projectsContainer'>
      <div className='projectsBtns'>
        <button className='tttBtn' onClick={() => { setTTTModal(true) }}>Tic Tac Toe</button>
        <button className='taskBtn' onClick={() => { setTask(true) }}>Task Compiler</button>
        <button className='weatherBtn' onClick={() => { setWeatherBtn(true) }}>Weather App</button>
      </div>
      {tttmodal && <TTTModal closeModal={setTTTModal} />}
      {task && <TaskModal closeModal={setTask}/>}
      {weatherBtn && <WeatherModal closeModal={setWeatherBtn} />}
    </div>
  )
}

export default Projects;
