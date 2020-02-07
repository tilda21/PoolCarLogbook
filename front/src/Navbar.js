import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <div class='nav_container'>
            <div>
                <Link to='/'>
                    <img src="https://i.imgur.com/j8aPf6r.png" alt="Volkswagen Digital Solutions" class="nav_logo"/>
                </Link>
            </div>
            <div class="nav_content">
                <Link to='/trip/start'><div class="nav_link">Start</div></Link>
                <Link to='/trip/end'><div class="nav_link">End</div></Link>
                <Link to='/trip'><div class="nav_link2">Trips Log</div></Link>
            </div>
        </div>
    )
}

export default Navbar;