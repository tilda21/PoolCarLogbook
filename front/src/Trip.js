import React from 'react';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';

const Trip = ({ data }) => {
    return(
        <>
            <h1>Select your trip/Trips log</h1>
            <select name="driver" id="driver">
                <option value="driver">driver</option>
            </select>
            <Link to='/tripkm'>Trip Km</Link>
            { data.map(trip => <TripCard trip={trip} />) }
        </>
    )
}

export default Trip;