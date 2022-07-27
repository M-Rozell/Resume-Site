
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../css/BootstrapGhibli.css';
import Navbar from "./Navbar";


const People = () => {

    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/')
    };

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(e => alert(e.message))
    }, []);

    return (
        <div id="peopleApp">
            <div id="peopleContainer">

                <div className='ghibliCloseBtn '>
                    <button onClick={navigateToProjects}><AiOutlineCloseCircle /></button>
                </div>

                <Navbar />
                <main className="container mt-5 mb-5">
                    <section className="row justify-content-center ">
                        <div className="col-md-6 ">
                            <ul className="list-group ">
                                {people.map(person => (
                                    <li
                                        key={`people=${person.id}`}
                                        className="list-group-item d-flex justify-content-between align-items-center shadow rounded">
                                        <span>{person.name}</span>
                                        <Link to={`/people/${person.id}`} className="btn btn-outline-success">
                                            Full Details
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default People;


