// src/components/FireAnalyticsTable.js
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const dummyData = [
  { id: 1, cameraName: 'Camera 1', status: 'Active', actions: 'View' },
  { id: 2, cameraName: 'Camera 2', status: 'Inactive', actions: 'View' },
  { id: 3, cameraName: 'Camera 3', status: 'Active', actions: 'View' },
  // Add more dummy data as needed
];

const  NumberPlateEventTable =()=> {
  return (
    <div className="p-4">
        <div className='flex justify-end w-full'>
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Add New Entry
      </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Camera Name</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b text-center">{item.cameraName}</td>
              <td className="py-2 px-4 border-b text-center">{item.status}</td>
              <td className="py-2 px-4 border-b text-center">
              <div className="text-blue-500 hover:text-blue-700 cursor-pointer flex justify-center items-center">
                  <Link to={`/gun-detection-analytics-details/${item.id}`}><AiOutlineEye /></Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NumberPlateEventTable;
