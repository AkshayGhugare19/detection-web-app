// src/Dashboard.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaCar, FaFire } from 'react-icons/fa';
import { FaGun } from 'react-icons/fa6';
import PieChart from '../components/PieChart';
import { apiGET } from '../utilities/apiHelpers';
import DotLoader from '../components/DotLoader';

const Dashboard = () => {
  const [fireData, setFireData] = useState({ labels: [], values: [] });
  const [weaponData, setWeaponData] = useState({ labels: [], values: [] });
  const [plateData, setPlateData] = useState({ labels: [], values: [] });
  const [fireCount, setFireCount] = useState(0);
  const [weaponCount, setWeaponCount] = useState(0);
  const [plateCount, setPlateCount] = useState(0);
  const [lastFireDetected, setLastFireDetected] = useState('');
  const [lastWeaponDetected, setLastWeaponDetected] = useState('');
  const [lastPlateDetected, setLastPlateDetected] = useState('');
  const [loading,setLoading] =useState(false);

  const getDashboardData = async () => {
    setLoading(true)
    const response = await apiGET('/get-dashboard-data');
    console.log("Dashboard data",response)
    const data = response.data.analytics;

    if(response.status===200){
      const fireCount = data?.fire_data?.length;
      const weaponCount = data?.weapon_data?.length;
      const plateCount = data?.number_plate_data?.length;
  
      setFireCount(fireCount);
      setWeaponCount(weaponCount);
      setPlateCount(plateCount);
  
      if (fireCount > 0) {
        setLastFireDetected(new Date(data?.fire_data[fireCount - 1]?.created_at)?.toLocaleString());
      }
  
      if (weaponCount > 0) {
        setLastWeaponDetected(new Date(data?.weapon_data[weaponCount - 1]?.created_at)?.toLocaleString());
      }
  
      if (plateCount > 0) {
        setLastPlateDetected(new Date(data?.number_plate_data[plateCount - 1]?.created_at)?.toLocaleString());
      }
  
      setFireData({ labels: ['Active', 'Resolved'], values: [40, 20] }); // Adjust as needed
      setWeaponData({ labels: ['Guns', 'Knives'], values: [weaponCount, 5] }); // Adjust as needed
      setPlateData({ labels: ['Recognized', 'Unrecognized'], values: [plateCount, 15] }); // Adjust as needed
      setLoading(false);
    }else{
      setLoading(false);
    }
    
     };

  useEffect(() => {
    getDashboardData();
  }, []);

  if(loading) return <DotLoader/>

  return (
    <div className="min-h-screen">
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
          <p className="text-gray-700">
            Number of fires detected: <span className="font-bold">{fireCount}</span>
          </p>
          <p className="text-gray-500">Last detected: {lastFireDetected}</p>
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
          <p className="text-gray-700">
            Number of weapons detected: <span className="font-bold">{weaponCount}</span>
          </p>
          <p className="text-gray-500">Last detected: {lastWeaponDetected}</p>
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
          <p className="text-gray-700">
            Number of plates detected: <span className="font-bold">{plateCount}</span>
          </p>
          <p className="text-gray-500">Last detected: {lastPlateDetected}</p>
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
