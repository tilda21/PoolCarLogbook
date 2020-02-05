import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div>
                <Link to='/'>
                    <img src="https://via.placeholder.com/150" alt="logo"/>
                </Link>
            </div>
            <Link to='/trip'>Start</Link>
            <Link to='/trip'><div>End</div></Link>
            <Link to='/trip'><div>Trips Log</div></Link>
        </div>
    )
}

export default Navbar;