import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import LandingPage from './Components/LandingPage';
import Instructions from './Components/Instructions.tsx';
import ComponentsUsed from './Components/ComponentsUsed.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/components-used" element={<ComponentsUsed />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
