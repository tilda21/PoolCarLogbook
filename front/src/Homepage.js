import React from 'react';
import { Link } from "react-router-dom";
  

const Homepage = ({ data }) => {
    return(
        <>
            <h1>Title</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/booking'>Booking</Link>
                        </li>
                        <li>
                            <Link to='/trip'>Start Trip</Link>
                        </li>
                        <li>
                            <Link to='/trip'>End Trip</Link>
                        </li>
                        <li>
                            <Link to='/trip'>Trips Log</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Homepage;