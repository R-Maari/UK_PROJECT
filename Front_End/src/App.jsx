import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/index';
import StaffRegistration from './Pages/staffregistration';
import StudentLogin from "./Pages/studentlogin";
import Dashboard from "./Pages/Dashboard";
import Profile from './Pages/Profile';
import Classes from './Pages/Classes';
import Tests from './Pages/Tests';
import Attendance from './Pages/Attendance';
import Homework from './Pages/Homework'
import Timetable from './Pages/Timetable'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/staffregistration" element={<StaffRegistration />} />
        <Route path='/studentlogin' element={<StudentLogin />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path="profile" element={<Profile />} />
          <Route path="classes" element={<Classes />} />
          <Route path="tests" element={<Tests />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="homework" element={<Homework />} />
          <Route path="timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;
