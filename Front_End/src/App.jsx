import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/index'; // Adjusted the path for consistency
import Register from './Pages/register';
import Login from './Pages/login';
import Home from './Pages/home';
import Login1 from './Pages/login1';
import Student from './Pages/student';
import Tutor from './Pages/tutor';
import Staffreg from './Pages/staffreg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/student" element={<Student />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/staffreg" element={<Staffreg />} />
      </Routes>
    </Router>
  );
}

export default App;
