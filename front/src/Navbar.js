import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div>
                <Link to='/'>
                    <img src="https://i.imgur.com/j8aPf6r.png" alt="Volkswagen Digital Solutions" width='397'/>
                </Link>
            </div>
            <navbar>
                <Link to='/trip'><a class="navbarlink">Start</a></Link>
                <Link to='/trip'><a class="navbarlink">End</a></Link>
                <Link to='/trip'><a class="navbarlink">Trips Log</a></Link>
            </navbar>
        </div>
    )
}

export default Navbar;