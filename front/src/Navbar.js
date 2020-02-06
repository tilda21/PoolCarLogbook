import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div>
                <Link to='/'>
                    <img src="https://i.imgur.com/j8aPf6r.png" alt="Volkswagen Digital Solutions" class="VWDS-logo"/>
                </Link>
            </div>
            <div className="navbar">
                <Link to='/trip/start'><a class="navbarlink">Start</a></Link>
                <Link to='/trip/end'><a class="navbarlink">End</a></Link>
                <Link to='/trip'><a class="navbarlink2">Trips Log</a></Link>
            </div>
        </div>
    )
}

export default Navbar;