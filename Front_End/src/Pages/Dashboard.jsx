// src/components/Dashboard.js
import React from 'react';
import Logo from '../images/theos.png';
import './dashboard.scss'; // Assuming you have an App.css file
import { Link } from 'react-router-dom';



const Dashboard = () => {
    return (
        <div>
        <div className='dashboardStyle'>
           <img src={Logo} alt="Logo" id='db-logo-img' />
           <span id='first-logo-name'>THEOS EDUCATIONAL ACADEMY</span>
           <br></br>
            <span id='second-logo-name'>THRIVING FOR PERFECTION</span>
            
            

      <div className="dashboard-container">
      <nav className="sidebar">
        
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/tests">Tests</Link>
          </li>
          <li>
            <Link to="/attendance">Attendance</Link>
          </li>
          <li>
            <Link to="/homework">Homework</Link>
          </li>
          <li>
            <Link to="/Timetable">Timetable</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
            <div className='container-db-tutor'>
            <img src={Logo} alt="Logo" id='db-logo-img' />
            </div> 
    </div>
            
           

           
            
    );
};

export default Dashboard;
