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
<<<<<<< HEAD
            <div class="navbar">
                <Link to='/trip/start'><a class="navbarlink">Start</a></Link>
                <Link to='/trip/end'><a class="navbarlink">End</a></Link>
                <Link to='/trip'><a class="navbarlink2">Trips Log</a></Link>
=======
            <div className="navbar">
                <Link to='/trip/start'><p class="navbarlink">Start</p></Link>
                <Link to='/trip/end'><p class="navbarlink">End</p></Link>
                <Link to='/trip'><p class="navbarlink2">Trips Log</p></Link>
>>>>>>> 20b381a1b475f884157d11e9407bc7ecac5cb389
            </div>
        </div>
    )
}

export default Navbar;