import React from 'react';
import Agenda from './Agenda';

const Booking = () => {
    return (
        <div className='booking-container'>
            <h1>CAR POOL BOOKING</h1>
            <div>calendar</div>
            <Agenda/>
            <div>Enter driver name:</div>
            <input type="text" />
            <div>Enter destination</div>
            <input type="text" />
        </div>
    )
}

export default Booking;