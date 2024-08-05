// src/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaCar, FaFire } from 'react-icons/fa';
import { FaGun } from 'react-icons/fa6';
import PieChart from '../components/PieChart';

const Dashboard = () => {
  const fireData = {
    labels: ['Active', 'Resolved'],
    values: [25, 20]
  };

  const weaponData = {
    labels: ['Guns', 'Knives'],
    values: [15, 5]
  };

  const plateData = {
    labels: ['Recognized', 'Unrecognized'],
    values: [50, 15]
  };

  return (
    <div className="min-h-screen ">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Detection Analytics Dashboard</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fire Detection Panel */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <FaFire className="text-red-500 text-3xl mr-3" />
            <h2 className="text-xl font-semibold">Fire Detection</h2>
          </div>
          <p className="text-gray-700">Number of fires detected: <span className="font-bold">45</span></p>
          <p className="text-gray-500">Last detected: 10 minutes ago</p>
        </motion.div>

        {/* Weapon Detection Panel */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <FaGun className="text-blue-500 text-3xl mr-3" />
            <h2 className="text-xl font-semibold">Weapon Detection</h2>
          </div>
          <p className="text-gray-700">Number of weapons detected: <span className="font-bold">20</span></p>
          <p className="text-gray-500">Last detected: 5 minutes ago</p>
        </motion.div>

        {/* Number Plate Detection Panel */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <FaCar className="text-green-500 text-3xl mr-3" />
            <h2 className="text-xl font-semibold">Number Plate Detection</h2>
          </div>
          <p className="text-gray-700">Number of plates detected: <span className="font-bold">65</span></p>
          <p className="text-gray-500">Last detected: 15 minutes ago</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <PieChart data={fireData} title="Fire Detection Stats" />
        <PieChart data={weaponData} title="Weapon Detection Stats" />
        <PieChart data={plateData} title="Number Plate Detection Stats" />
      </div>
    </div>
  );
};

export default Dashboard;
