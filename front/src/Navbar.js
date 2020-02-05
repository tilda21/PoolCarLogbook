import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar-container'>
            <div>
                <Link to='/'>
                    <img src="https://i.imgur.com/j8aPf6r.png" alt="Volkswagen Digital Solutions logo" width='300px'/>
                </Link>
            </div>
            <Link to='/trip'>Start</Link>
            <Link to='/trip'><div>End</div></Link>
            <Link to='/trip'><div>Trips Log</div></Link>
        </div>
    )
}

export default Navbar;