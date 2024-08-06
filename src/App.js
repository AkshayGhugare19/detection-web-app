import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import GunDetectionAnalytics from './pages/GunDetectionAnalytics';
import GunDetectionEvents from './pages/GunDetectionEvents';
import FireDetectionAnalyitcs from './pages/FireDetectionAnalyitcs';
import FireDetectionEvents from './pages/FireDetectionEvents';
import NumberPlateDetectionAnalytics from './pages/NumberPlateDetectionAnalytics';
import NumberPlateDetectionEvents from './pages/NumberPlateDetectionEvents';
import UserTable from './modules/settings/userTable';
import AddRole from './modules/settings/addRole';
import AnalyticsDetails from './pages/AnalyticsDetails';
import AddCamera from './pages/AddCamera';
import CameraDetails from './pages/CameraDetails';
import Dashboard from './pages/DashboardPage';
import AuthPage from './pages/auth/AuthPage';

const publicRoutes = [
  { path: '/auth', component: AuthPage },
];

const protectedRoutes = [
  { path: '/', component: Dashboard },
  { path: '/gun-detection-analytics', component: GunDetectionAnalytics },
  { path: '/gun-detection-events', component: GunDetectionEvents },
  { path: '/fire-detection-analytics', component: FireDetectionAnalyitcs },
  { path: '/fire-detection-events', component: FireDetectionEvents },
  { path: '/number-plate-detection-analytics', component: NumberPlateDetectionAnalytics },
  { path: '/number-plate-detection-events', component: NumberPlateDetectionEvents },
  { path: '/settings/add-user', component: UserTable },
  { path: '/settings/add-role', component: AddRole },
  { path: '/detection-analytics-details/:id', component: AnalyticsDetails },
  { path: '/settings/add-camera', component: AddCamera },
  { path: '/camera-details/:id', component: CameraDetails },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        
        {/* Protected Routes */}
        {protectedRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute>
                <div className="flex h-[80vh]">
                  <Sidebar />
                  <main className="flex-1 p-4">
                    <Component />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
        ))}

        {/* Redirect to auth if not authenticated and accessing a protected route */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

function ProtectedRoute({ children }) {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/auth';

  // Replace this with actual authentication logic
  const isAuthenticated = true; // Example: check if user is authenticated

  if (isAuthRoute) {
    return children;
  }

  return isAuthenticated ? children : <Navigate to="/auth" />;
}

export default App;
