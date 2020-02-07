import React from 'react';
import Agenda from './Agenda';
import './booking.css';

const Booking = ({ data }) => {
    return (
        <div class='booking_container'>
            <h1 class="booking_title">CAR POOL BOOKING</h1> 
            <div class="booking_label">Enter driver name:</div>
            <input type="text" />
            <div class="booking_label">Enter destination:</div>
            <input type="text" />
            <Agenda data={data} />
        </div>
    )
}

export default Booking;