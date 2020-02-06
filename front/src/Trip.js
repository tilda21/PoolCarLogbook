import React from 'react';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';
import './triplog.css';

const Trip = ({ data }) => {
    return(
        <>
            <h1 class="triplog_title">Select your trip/Trips log</h1>
            <div className="triplog_content">
                <select name="driver" id="driver">
                    <option value="driver">driver</option>
                </select>
                <Link to='/tripkm'>Trip Km</Link>
                { data.map(trip => <TripCard trip={trip} />) }
            </div>
        </>
    )
}

export default Trip;