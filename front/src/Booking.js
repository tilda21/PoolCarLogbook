import React from 'react';
import Agenda from './Agenda';
import './booking.css';

const Booking = () => {
    return (
        <div class='booking_container'>
            <h1 cla="booking_title">CAR POOL BOOKING</h1>
            <div class="booking_subtitle">Calendar</div>
            <Agenda/>
            <div class="booking_"> 
                <div class="booking_label">Enter driver name:</div>
                <input type="text" />
                <div class="booking_label">Enter destination:</div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Booking;