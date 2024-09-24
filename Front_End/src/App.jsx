import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/index';
import StaffRegistration from './Pages/staffregistration';
import StudentLogin from "./Pages/studentlogin";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/staffregistration" element={<StaffRegistration />} />
        <Route path='/studentlogin' element={<StudentLogin />}/>
      
      </Routes>
    </Router>
  );
}

export default App;
