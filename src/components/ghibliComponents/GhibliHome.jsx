
import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import '../../css/BootstrapGhibli.css'

const GhibliHome = () => {

    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/')
    }

    return (
        <div id="homeContainer">
            <div className='ghibliCloseBtn '>
                <button onClick={navigateToProjects}><AiOutlineCloseCircle /></button>
            </div>
            
            <Navbar />
            
            <main className="container mt-5 justify-content-center">

                <div className="card col md-6 text-center">
                    <div className="card-body shadow rounded">
                        <h3 className="card-title">Studio Ghibli Routing Lab</h3>
                        <p className="card-text">
                            Welcome to my React Routing Lab using the Studio Ghibli API.
                            This is like a mini IMDB for my favorite animation studio. I
                            use React, useState and useEffect hooks. Fetch, a REST API,
                            Bootstrap, and React Router to build this project. Use the
                            navbar to click around to see all films or all people, and
                            click the Read More links to see the full details of that
                            resource. Enjoy!
                        </p>
                        <a href="mailto:maggiemagnum@gmail.com" className="card-link" id="emailLink">maggiemagnum@gmail.com</a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GhibliHome


    ;





