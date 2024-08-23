import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../src/Pages/index';
import Register from './Pages/register';
import Login from "../src/Pages/login";
import Student from './Pages/student';
import Tutor from './Pages/tutor';
import Home from './Pages/home';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tutor' element={<Tutor />} />
        <Route path='/student' element={<Student />} />
         <Route path='/home' element={<Home />} />
 
      </Routes>
    </Router>
  );
}

export default App;
