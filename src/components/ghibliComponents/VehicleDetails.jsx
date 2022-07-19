
import { Link, useParams, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from "react";
import Navbar from "./Navbar";


const VehicleDetails = () => {

    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate('/')
    };

    const { vehicleid } = useParams();
    const [details, setDetails] = useState(null);
    const [pilot, setPilot] = useState('');

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${vehicleid}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                return fetch(data.pilot)
            })
            .then(data => data.json())
            .then(data => setPilot(data))
            .catch(e => alert(e.message))

    }, [vehicleid]); //array dependency

    return (
        <div id="vehicleDetailsApp">
            <div id="vehicleDetailsContainer">

                <div className='ghibliCloseBtn '>
                    <button onClick={navigateToProjects}><AiOutlineCloseCircle /></button>
                </div>

                <Navbar />
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <div className="card shadow rounded">
                                <div className="card-body">
                                    <h2 className="card-title">{details?.name}</h2>
                                    <Link to={`/pilotdetails/${pilot.id}`} className="">Pilot Details</Link>
                                    <h6 className="card-subtitle mt-1">Vehicle Class: {details?.vehicle_class}</h6>
                                    <h6 className="card-subtitle mt-1 mb-2">Vehicle Length: {details?.length}ft.</h6>
                                    <p className="card-text mt-1">{details?.description}</p>
                                    <Link to="/vehicles" className="btn btn-outline-success mt-3">Go Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetails;

