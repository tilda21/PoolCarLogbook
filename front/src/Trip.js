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
            <div class="triplog_content">
                <div class="triplog_select_km">
                    <div class="triplog_select">
                        <select name="driver" id="driver">
                            <option value="driver">driver</option>
                        </select>
                    </div>
                    <div class="triplog_km">
                        <Link to='/tripkm'>Trip Km</Link>
                    </div>
                </div>
                { data.map(trip => <TripCard trip={trip} />) }
            </div>
        </>
    )
}

export default Trip;