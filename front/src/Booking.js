import React from 'react';
import Agenda from './Agenda';
import './booking.css';

const Booking = ({ data }) => {
    return (
        <div className='booking-container'>
            <h1>CAR POOL BOOKING</h1>
            <div>Enter driver name:</div>
            <input type="text" />
            <div>Enter destination</div>
            <input type="text" />
            <Agenda data={data} />
        </div>
    )
}

export default Booking;