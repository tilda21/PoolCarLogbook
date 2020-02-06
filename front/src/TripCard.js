import React from 'react';
import Moment from 'react-moment';
import Button from './Button';

const TripCard = ({ trip }) => {

    return(
        <>
            <div>Driver: {trip.driver_name}</div>
            <div>Reservation date: <Moment format='DD/MMM/YYYY'>{trip.book_date}</Moment></div>
            <div>Destination: {trip.destination}</div>
            <div>Start: {trip.book_date}</div>
            <div>End: {trip.book_date}</div>
            <Button />
        </>
    )
}

export default TripCard;