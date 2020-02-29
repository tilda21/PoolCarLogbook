import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <div class='navbar-container'>
            <div>
                <Link to='/'>
                    <img src="https://i.imgur.com/j8aPf6r.png" alt="Volkswagen Digital Solutions" class="VWDS-logo"/>
                </Link>
            </div>
            <div className="navbar">
                <Link to='/trip/start'><p class="navbarlink">Start</p></Link>
                <Link to='/trip/end'><p class="navbarlink">End</p></Link>
                <Link to='/trip'><p class="navbarlink2">Trips Log</p></Link>
            </div>
        </div>
    )
}

export default Navbar;