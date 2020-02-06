import React from 'react';
import { Link } from "react-router-dom";
import './homepage.css';
  

const Homepage = ({ data }) => {
    return(
        <div class='home'>
            <h1 class='home_title'>CAR POOL LOG</h1>
            <div class='home'>
                <nav>
                    <ul class='home_list'>
                        <li>
                            <Link class='home_link' to='/booking'>Booking</Link>
                        </li>
                        <li>
                            <Link class='home_link' to='/trip'>Start Trip</Link>
                        </li>
                        <li>
                            <Link class='home_link' to='/trip'>End Trip</Link>
                        </li>
                        <li>
                            <Link class='home_link' to='/trip'>Trips Log</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Homepage;