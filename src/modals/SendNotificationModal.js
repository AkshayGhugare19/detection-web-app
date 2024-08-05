import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Select from 'react-select';
import { apiGET, apiPOST } from '../utilities/apiHelpers';

const SendNotificationModal = ({ itemId, onClose }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  const handleUserChange = (selectedOptions) => {
    setSelectedUsers(selectedOptions || []);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const selectedUserDetails = users.filter(user =>
      selectedUsers.some(selected => selected?.value === user?.id.toString())
    );
    
    console.log('Sending notification to:', selectedUserDetails);
    console.log('Message:', message);
    const payload={
        "phone_number": selectedUserDetails[0]?.phone_number ,
        "message": message 
    }
    const response = await apiPOST(`/send-perticular-notification-on-whatsapp/${itemId}`,payload)
    if(response){
      alert('Notification send successful');
    }
    // Handle sending notification logic here
    onClose();
  };

  const getUsers = async () => {
    try {
      const response = await apiGET(`/get-user`);
      console.log("<<<<Users", response);
      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Transform user data for react-select
  const userOptions = users.map(user => ({
    value: user.id.toString(),
    label: user.name
  }));

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Send Notification</h2>
          <AiOutlineClose className="cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="users" className="block text-sm font-medium text-gray-700">Select Users</label>
            <Select
              id="users"
              isMulti
              value={selectedUsers}
              onChange={handleUserChange}
              options={userOptions}
              className="mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendNotificationModal;
