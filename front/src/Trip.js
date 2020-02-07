import React from 'react';
import { Link } from "react-router-dom";
import TripCard from './TripCard';
import './triplog.css';

const Trip = (props) => {

    const data = props.data;
    //console.log('this is the props recieved in Trip', props);
    

    return(
        <>
            <h1 class="triplog_title">Select your trip/Trips log</h1>
            <div class="triplog_content">
                <div class="triplog_select">
                    <select name="driver" id="driver">
                        <option value="driver">driver</option>
                    </select>
                </div>
                    <Link to='/tripkm'>Trip Km</Link>
                { 
                    data.map(trip => <TripCard trip={trip} key={trip.id} />) 
                }
            </div>
        </>
    )
}

export default Trip;