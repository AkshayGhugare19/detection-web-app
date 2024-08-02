import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineBell } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SendNotificationModal from '../../modals/SendNotificationModal';

const dummyData = [
  { id: 1, cameraName: 'Camera 1', status: 'Active', actions: 'View' },
  { id: 2, cameraName: 'Camera 2', status: 'Inactive', actions: 'View' },
  { id: 3, cameraName: 'Camera 3', status: 'Active', actions: 'View' },
  // Add more dummy data as needed
];

const NumberPlateAnylitcsTable = ({ NumberPlateDetectionData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

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
            <th className="py-2 px-4 border-b">Detection Type</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {NumberPlateDetectionData?.length && NumberPlateDetectionData?.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b text-center">camera 1</td>
              <td className="py-2 px-4 border-b text-center">active</td>
              <td className="py-2 px-4 border-b text-center">{item.type}</td>
              <td className="py-2 px-4 border-b text-center">{item.created_at}</td>
              <td className="py-2 px-4 border-b text-center">
                <div className="flex justify-center items-center space-x-2">
                  <Link to={`/detection-analytics-details/${item.id}`}>
                    <AiOutlineEye className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                  </Link>
                  <AiOutlineBell 
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => openModal(item.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <SendNotificationModal
          itemId={selectedItemId}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default NumberPlateAnylitcsTable;
