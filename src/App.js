import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GunDetection from './pages/GunDetection';
import FireDetection from './pages/FireDetection';
import NumberPlateDetection from './pages/NumberPlateDetection';
import Settings from './pages/Settings';
import StartDetection from './pages/StartDetection';


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<StartDetection />} />
            <Route path="/gun-detection" element={<GunDetection />} />
            <Route path="/fire-detection" element={<FireDetection />} />
            <Route path="/number-plate-detection" element={<NumberPlateDetection />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
