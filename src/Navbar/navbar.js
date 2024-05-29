import React from 'react';
import './navbar.css';
import logo from '../images/illinois_primary.svg';
import { useLocation } from 'react-router-dom';

const navbarList = [
    {
        path: "/",
        text: "Home"
    },
    {
        path: "/events",
        text: "Events"
    },
    {
        path: "/connect",
        text: "Connect"
    },
    {
        path: "/profile",
        text: "Profile"
    }
]

function Navbar({ isSelected = false }) {
    const location = useLocation();
    return (
        <div className="navbar-container">
            <div className='navbar-left-container'>
                <img src={logo} alt="Logo" width={200} height={50} />;
            </div>
            <div className='navbar-right-container'>
                {

                    navbarList.map((navbar) => <div className={location.pathname !== navbar.path ? `navbar-right-container-text` : "navbar-right-container-selected-text"}>
                        {navbar.text}
                    </div>)
                }
            </div>
        </div>

    );
}

export default Navbar;
