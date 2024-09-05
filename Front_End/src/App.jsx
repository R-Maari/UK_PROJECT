import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/index'; // Adjusted the path for consistency


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      
      </Routes>
    </Router>
  );
}

export default App;
