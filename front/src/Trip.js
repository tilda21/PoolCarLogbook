import React from 'react';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';
import './triplog.css';

const Trip = (props) => {

    const data = props.data;
    console.log('this is the props recieved in Trip', props);
    

    return(
        <>
            <h1 class="triplog_title">Select your trip/Trips log</h1>
            <div className="triplog_content">
                <div className="triplog_select">
                    <select name="driver" id="driver">
                        <option value="driver">driver</option>
                    </select>
                    <Link to='/tripkm'>Trip Km</Link>
                </div>
                { data.map(trip => <TripCard trip={trip} />) }
            </div>
        </>
    )
}

export default Trip;