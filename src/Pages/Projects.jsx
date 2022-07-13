
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Projects.css'
import TTTModal from '../components/TTTModal'
import TaskModal from '../components/TaskModal'
import WeatherModal from '../components/WeatherModal'
import GhibliHome from '../components/ghibliComponents/GhibliHome'
import '../css/BootstrapGhibli.css'

function Projects() {
  const [tttmodal, setTTTModal] = useState(false)
  const [task, setTask] = useState(false)
  const [weatherBtn, setWeatherBtn] = useState(false)

  const navigate = useNavigate();

  const navigateToGhibliHome = () => {
    navigate('/GhibliHome');
  }
  
  return (
    <div className='projectsContainer'>
      <div className='projectsBtns'>
        <button className='tttBtn' onClick={() => { setTTTModal(true) }}>Tic Tac Toe</button>
        <button className='taskBtn' onClick={() => { setTask(true) }}>Task Compiler</button>
        <button className='weatherBtn' onClick={() => { setWeatherBtn(true) }}>Weather App</button>
        <button className='bootstrapBtn' onClick={navigateToGhibliHome}>Bootstrap Ghibli</button>
      </div>
      {tttmodal && <TTTModal closeModal={setTTTModal} />}
      {task && <TaskModal closeModal={setTask}/>}
      {weatherBtn && <WeatherModal closeModal={setWeatherBtn} />}
      
      
    </div>
  )
}

export default Projects;
