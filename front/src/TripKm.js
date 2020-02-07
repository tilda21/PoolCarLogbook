import React from 'react';
import Button from './Button';
import './tripkm.css';

const TripKm = () => {
    return(
        <>
            <h1 class="tripkm_title">Kilometers</h1>
            <div class="tripkm_destination">Destination: destination</div>
            <div class="tripkm_enterkm">Enter start Kms</div>
            <div class="tripkm_input">
                <input type="text"/>
            </div>
            <div class="tripkm_button">
                <Button />
            </div>
        </>
    )
}

export default TripKm;