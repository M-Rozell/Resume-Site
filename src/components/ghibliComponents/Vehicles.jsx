import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Navbar from "./Navbar";

const Vehicles = () => {

    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/')
    }

    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(data => setVehicles(data))
            .catch(e => alert(e.message))
    }, []);

    return (
        <>
            <div className='ghibliCloseBtn '>
                <button onClick={navigateToProjects}><AiOutlineCloseCircle /></button>
            </div>

            <Navbar />
            <main className="container mt-5 mb-5">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {vehicles.map(vehicle => (
                                <li
                                    key={`vehicles=${vehicle.id}`}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{vehicle.name}</span>
                                    <Link to={`/vehicles/${vehicle.id}`} className="btn btn-outline-success">
                                        Full Details
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Vehicles;