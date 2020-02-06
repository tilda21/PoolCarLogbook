import React from 'react';
import Agenda from './Agenda';
import './booking.css';

const Booking = () => {
    return (
        <div className='booking_container'>
            <h1 className="booking_title">CAR POOL BOOKING</h1>
            <div className="booking_subtitle">Calendar</div>
            <Agenda/>
            <div className="booking_"> 
                <div className="booking_label">Enter driver name:</div>
                <input type="text" />
                <div className="booking_label">Enter destination:</div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Booking;