import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GunDetectionAnalytics from './pages/GunDetectionAnalytics';
import GunDetectionEvents from './pages/GunDetectionEvents';
import FireDetectionAnalyitcs from './pages/FireDetectionAnalyitcs';
import FireDetectionEvents from './pages/FireDetectionEvents';
import NumberPlateDetectionAnalytics from './pages/NumberPlateDetectionAnalytics';
import NumberPlateDetectionEvents from './pages/NumberPlateDetectionEvents';
import StartDetection from './pages/StartDetection';
import UserTable from './modules/settings/userTable';
import AddRole from './modules/settings/addRole';
import AnalyticsDetails from './pages/AnalyticsDetails';



function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<StartDetection />} />
            <Route path="/gun-detection-analytics" element={<GunDetectionAnalytics />} />
            <Route path="/gun-detection-events" element={<GunDetectionEvents />} />
            <Route path="/fire-detection-analytics" element={<FireDetectionAnalyitcs />} />
            <Route path="/fire-detection-events" element={<FireDetectionEvents />} />
            <Route path="/number-plate-detection-analytics" element={<NumberPlateDetectionAnalytics />} />
            <Route path="/number-plate-detection-events" element={<NumberPlateDetectionEvents />} />
            <Route path="/settings/add-user" element={<UserTable />} />
            <Route path="/settings/add-role" element={<AddRole />} />
            <Route path="/gun-detection-analytics-details/:id" element={<AnalyticsDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
