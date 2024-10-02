// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={sidebarStyle}>
            <h3>Dashboard</h3>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/attendance">Attendance</Link></li>
                <li><Link to="/homework">Homework</Link></li>
                <li><Link to="/classes">Classes</Link></li>
                <li><Link to="/tests">Tests</Link></li>
            </ul>
        </div>
    );
};

const sidebarStyle = {
    width: '200px',
    background: '#fff',
    padding: '20px',
    position: 'fixed',
    height: '100%',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
};

export default Sidebar;
