import React from 'react';
import './dashboard.css';
import Navbar from '../Navbar/navbar';

import logo from '../images/uiuc.jpeg';
import SouthIcon from '@mui/icons-material/South';
import Events from '../Events/events';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div>
                <Navbar />
            </div>
            <div>
                <img src={logo} alt="Logo" className='dashboard-img' />
                <div className='welcome-msg-content'>
                    <div className='welcome-msg'>
                        Welcome to Campus Connect!
                    </div>
                    <div>
                        Explore the dynamic campus life at UIUC with a plethora of events, meetups, and activities, igniting your journey to endless connections and adventures!
                    </div>
                    <SouthIcon fontSize='1rem' className='down-arrow'/>
                </div>
            </div>

            <Events />
        </div>

    );
}

export default Dashboard;
