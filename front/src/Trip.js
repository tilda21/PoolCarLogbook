import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import TripCard from './TripCard';

const Trip = () => {
    return(
        <>
            <Navbar />
            <h1>Select your trip/Trips log</h1>
            <select name="driver" id="driver">
                <option value="driver">driver</option>
            </select>
            <TripCard />
            <Footer />
        </>
    )
}

export default Trip;