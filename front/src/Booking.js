import React , { useState }  from 'react';
import Agenda from './Agenda';
import './booking.css';

const Booking = ({ data }) => {
    const [driver_name, setDriverName] = useState('');
    const [destination, setDestination] = useState('');

    let updateDataField = (e) => {
        if(e.target.name=='driver_name'){
            setDriverName(e.target.value);
        }
        else{
            setDestination(e.target.value);
        }
    }

    let handleSubmit = (e) => {
        alert('Nice Try')
    }

    return (
        <div className='booking-container'>
            <h1>CAR POOL BOOKING</h1>
            <form onSubmit={handleSubmit} >
                <label>
                        Enter Driver Name:
                    <input type="text" name="driver_name"  onChange={updateDataField} value={driver_name} />
                </label>
                
                <label>
                        Enter Destination:
                    <input type="text" name="destination" onChange={updateDataField} value={destination}/>
                </label>
                <input type='submit' value='Submit' />
            </form>
            
            
            <Agenda data={data} />
        </div>
    )
}

export default Booking;