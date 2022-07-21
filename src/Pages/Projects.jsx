
import WeatherModal from '../components/WeatherModal';
import {TbArrowBigUpLines} from "react-icons/tb"
import TaskModal from '../components/TaskModal';
import { useNavigate } from 'react-router-dom';
import TTTModal from '../components/TTTModal';
import React, { useState, useEffect } from 'react';
import '../css/BootstrapGhibli.css';
import '../css/Projects.css';

import '../css/Projects.css'


function Projects() {
const navigate = useNavigate();
  const [tttmodal, setTTTModal] = useState(false);
  const [task, setTask] = useState(false);
  const [weatherBtn, setWeatherBtn] = useState(false);
  // const [showArrowUp, setShowArrowUp] = useState(false);

  const navigateToGhibliHome = () => {
    navigate('/GhibliHome');
  };

  // useEffect (() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 400) {
  //       setShowArrowUp(true);
  //     }else {
  //       setShowArrowUp(false);
  //     }
  //   });
  // }, []);

//   const goToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// };

  

  return (
    
      <div className='projectsContainer'>

        <div className='projectsTitle'>Projects</div>

        <div className='projectsBtns'>
          <button className='tttBtn' onClick={() => { setTTTModal(true) }}>Tic Tac Toe</button>
          <button className='taskBtn' onClick={() => { setTask(true) }}>Task Compiler</button>
          <button className='weatherBtn' onClick={() => { setWeatherBtn(true) }}>Weather App</button>
          <button className='bootstrapBtn' onClick={navigateToGhibliHome}>Bootstrap Ghibli</button>
        </div>

        {tttmodal && <TTTModal closeModal={setTTTModal} />}
        {task && <TaskModal closeModal={setTask} />}
        {weatherBtn && <WeatherModal closeModal={setWeatherBtn} />}

        {/* <div className='arrowUp'>
          {" "}
          {showArrowUp && (
            <TbArrowBigUpLines 
            className='arrowBtn icon-position'
            onClick={goToTop}
            />
          )}{" "}
          
        </div> */}

        {/* <div className="arrowUp">
          <TbArrowBigUpLines 
          className='arrowBtn icon-position'
          onClick={goToTop}
          />
        </div> */}

      </div>
    
  )
}

export default Projects;
