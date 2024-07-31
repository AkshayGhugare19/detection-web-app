// src/components/AddCameraModal.js
import React, { useState } from 'react';

const AddCameraModal = ({ isOpen, onClose, onAdd }) => {
  const [cameraId, setCameraId] = useState('');
  const [cameraName, setCameraName] = useState('');
  const [stream, setStream] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: cameraId, cameraName, stream, status: 'Inactive' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Camera</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cameraId">Camera ID:</label>
            <input
              type="text"
              id="cameraId"
              value={cameraId}
              onChange={(e) => setCameraId(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cameraName">Camera Name:</label>
            <input
              type="text"
              id="cameraName"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="stream">Stream URL:</label>
            <input
              type="url"
              id="stream"
              value={stream}
              onChange={(e) => setStream(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCameraModal;
