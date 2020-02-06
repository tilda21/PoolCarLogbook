import React from 'react';
import Moment from 'react-moment';
import Button from './Button';

const TripCard = ({ trip }) => {
    console.log(trip);
    return(
        <>
            <div>Driver: {trip.driver_name}</div>
            <div>Reservation date: <Moment format='DD/MMM/YYYY'>{trip.book_date}</Moment></div>
            <div>Destination: {trip.destination}</div>
            <div>Start: {trip.start_time.slice(0, -3)}</div>
            <div>End: {trip.end_time.slice(0, -3)}</div>
            <Button />
        </>
    )
}

export default TripCard;