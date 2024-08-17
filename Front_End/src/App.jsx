import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '../src/Pages/index';
import Register from '../src/Pages/resgister';
import Login from "../src/Pages/login";
import Student from './Pages/student';
import Tutor from './Pages/tutor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tutor' element={<Tutor />} />
        <Route path='/student' element={<Student />} />

      </Routes>
    </Router>
  );
}

export default App;
