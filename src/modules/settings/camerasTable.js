// src/components/CamerasTable.js
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddCameraModal from '../../modals/AddCameraModal';

const dummyData = [
  { id: 1, cameraName: 'Camera 1', stream: 'http://example.com/stream1', status: 'Active' },
  { id: 2, cameraName: 'Camera 2', stream: 'http://example.com/stream2', status: 'Inactive' },
  { id: 3, cameraName: 'Camera 3', stream: 'http://example.com/stream3', status: 'Active' },
  // Add more dummy data as needed
];

const CamerasTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cameras, setCameras] = useState(dummyData);

  const handleAddCamera = (newCamera) => {
    setCameras([...cameras, newCamera]);
  };

  return (
    <div className="p-4">
        <div className='flex justify-end w-full'>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Add New Entry
      </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">Id</th>
            <th className="py-2 px-4 border-b text-center">Camera Name</th>
            <th className="py-2 px-4 border-b text-center">Stream</th>
            <th className="py-2 px-4 border-b text-center">Status</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cameras.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b text-center">{item.cameraName}</td>
              <td className="py-2 px-4 border-b text-center">
                <a href={item.stream} className="text-blue-500 hover:text-blue-700">{item.stream}</a>
              </td>
              <td className="py-2 px-4 border-b text-center">{item.status}</td>
              <td className="py-2 px-4 border-b text-center">
                <div className="flex justify-center items-center space-x-4">
                  <Link to={`/camera-details/${item.id}`} className="text-blue-500 hover:text-blue-700 cursor-pointer">
                    <AiOutlineEye />
                  </Link>
                  <button className="text-green-500 hover:text-green-700">
                    <AiOutlinePlayCircle />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <AiOutlineStop />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddCameraModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddCamera}
      />
    </div>
  );
};

export default CamerasTable;
