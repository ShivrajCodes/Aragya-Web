import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.tsx';
import LandingPage from './Components/LandingPage';
import Instructions from './Components/Instructions.tsx';
import ComponentsUsed from './Components/ComponentsUsed.tsx';
// import ViewEmergencyUses from './Components/ViewEmergencyUses';
import Parameters from './Components/Parameters';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/components-used" element={<ComponentsUsed />} />
          {/* Add ViewEmergencyUses route when ready */}
          <Route path="/view-parameters" element={<Parameters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
