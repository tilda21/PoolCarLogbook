import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  

const Homepage = ({ data }) => {
    return(
        <>
            <h1>Title</h1>
            <div>
                <ul>
                    <li>
                        <Link to='/booking'>Booking</Link>
                    </li>
                    <li>
                        <Link to='/trip'>Trips Log</Link>
                    </li>
                    <li>
                        <Link to='/trip/start'>Start Trip</Link>
                    </li>
                    <li>
                        <Link to='/trip/end'>End Trip</Link>
                    </li>
                </ul>
            </div>     
        </>
    )
}

export default Homepage;