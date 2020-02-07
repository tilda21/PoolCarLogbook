import React from 'react';
import Moment from 'react-moment';
import Button from './Button';
import { Link } from "react-router-dom";

import './triplog.css';

const TripCard = ({ trip }) => {
    //console.log(trip);

    return(
        <div class="triplog_card">
            <div class="triplog_driver_info">
                <div class="triplog_driver_bold">
                    Driver:
                </div>
                {trip.driver_name}
            </div>
            <div class="triplog_reservation_info">
                <div class="triplog_reservation_bold">
                    Reservation date:
                </div> 
                <Moment format='DD/MMM/YYYY'>
                    {trip.book_date}
                </Moment>
            </div>
            <div class="triplog_destination_info">
                <div class="triplog_destination_bold">    
                    Destination: 
                </div>
                {trip.destination}
            </div>
            <div class="triplog_start_info">
                <div class="triplog_start_bold">
                    Start:
                </div>
                {trip.start_time.slice(0, -3)}
            </div>
            <div class="triplog_end_info">
                <div class="triplog_end_bold">
                    End:
                </div>
                {trip.end_time.slice(0, -3)}
            </div>
            <Button />
        </div>
    )
}

export default TripCard;