import React from 'react';
import Moment from 'react-moment';
import Button from './Button';
import { Link } from "react-router-dom";

import './triplog.css';

const TripCard = ({ trip }) => {
<<<<<<< HEAD
    console.log(trip);
    return (
=======
    //console.log(trip);

    return(
>>>>>>> 65482e7a42b7deeeaf279ad31b27fec1f193006b
        <div className="triplog_card">
            <div className="triplog_driver_info">
               <div className="triplog_driver_bold">
                    Driver:
                </div>
                {trip.driver_name}
            </div>
            <div className="triplog_reservation_info">
                <div className="triplog_reservation_bold">
                    Reservation date:
                </div>
                <Moment format='DD/MMM/YYYY'>
                    {trip.start_date_time}
                </Moment>
            </div>
            <div className="triplog_destination_info">
                <div className="triplog_destination_bold">
                    Destination:
                </div>
                {trip.destination}
            </div>
            <div className="triplog_start_info">
                <div className="triplog_start_bold">
                    Start:
                </div>
                {trip.start_time.slice(0, -3)}
            </div>
            <div className="triplog_end_info">
                <div className="triplog_end_bold">
                    End:
                </div>
                {trip.end_time.slice(0, -3)}
            </div>
            <Button />
        </div>
    )
}

export default TripCard;