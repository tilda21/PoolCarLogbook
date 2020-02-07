import React from 'react';
import TripCard from './TripCard';
import './triplog.css';

const Trip = (props) => {

    const details = props.details;
    console.log('this is the props recieved in Trip', props);
    
    return(
        <>
            <h1 class="triplog_title">Select your trip/Trips log</h1>
            <div className="triplog_content">
                <div className="triplog_select">
                    <select name="driver" id="driver">
                        <option value="driver">driver</option>
                    </select>
                </div>
                { 
                    details.map(trip => <TripCard trip={trip} key={trip.id} />) 
                }
            </div>
        </>
    )
}

export default Trip;