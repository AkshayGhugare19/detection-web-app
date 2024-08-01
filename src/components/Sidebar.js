import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaCar, FaCogs, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdOutlineGavel } from 'react-icons/md';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen">
      <Link to="/"><div className="p-4 text-xl font-bold">Dashboard</div></Link>
      <ul>
        <li>
          <button 
            onClick={() => handleMenuClick('gunDetection')} 
            className="flex items-center justify-between w-full p-4 hover:bg-gray-700"
          >
            <span className="flex items-center">
              <MdOutlineGavel className="mr-2" /> Gun Detection
            </span>
            {openMenu === 'gunDetection' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openMenu === 'gunDetection' && (
            <ul className="pl-8">
              <li>
                <Link to="/gun-detection-analytics" className="block p-4 hover:bg-gray-600">Analytics</Link>
              </li>
              <li>
                <Link to="/gun-detection-events" className="block p-4 hover:bg-gray-600">Notifications</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button 
            onClick={() => handleMenuClick('numberPlateDetection')} 
            className="flex items-center justify-between w-full p-4 hover:bg-gray-700"
          >
            <span className="flex items-center">
              <FaCar className="mr-2" /> Number Plate Detection
            </span>
            {openMenu === 'numberPlateDetection' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openMenu === 'numberPlateDetection' && (
            <ul className="pl-8">
              <li>
                <Link to="/number-plate-detection-analytics" className="block p-4 hover:bg-gray-600">Analytics</Link>
              </li>
              <li>
                <Link to="/number-plate-detection-events" className="block p-4 hover:bg-gray-600">Notifications</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button 
            onClick={() => handleMenuClick('fireDetection')} 
            className="flex items-center justify-between w-full p-4 hover:bg-gray-700"
          >
            <span className="flex items-center">
              <FaFire className="mr-2" /> Fire Detection
            </span>
            {openMenu === 'fireDetection' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openMenu === 'fireDetection' && (
            <ul className="pl-8">
              <li>
                <Link to="/fire-detection-analytics" className="block p-4 hover:bg-gray-600">Analytics</Link>
              </li>
              <li>
                <Link to="/fire-detection-events" className="block p-4 hover:bg-gray-600">Notifications</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button 
            onClick={() => handleMenuClick('settings')} 
            className="flex items-center justify-between w-full p-4 hover:bg-gray-700"
          >
            <span className="flex items-center">
              <FaCogs className="mr-2" /> Settings
            </span>
            {openMenu === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openMenu === 'settings' && (
            <ul className="pl-8">
              <li>
                <Link to="/settings/add-camera" className="block p-4 hover:bg-gray-600">Add Camera</Link>
              </li>
              <li>
                <Link to="/settings/add-user" className="block p-4 hover:bg-gray-600">Add User</Link>
              </li>
              <li>
                <Link to="/settings/add-role" className="block p-4 hover:bg-gray-600">Add Role</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
