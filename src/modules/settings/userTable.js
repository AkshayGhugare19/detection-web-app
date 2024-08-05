// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import { apiGET, apiPOST } from '../../utilities/apiHelpers';
import DotLoader from '../../components/DotLoader';

const dummyData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  { id: 3, name: 'Sam Johnson', email: 'sam.johnson@example.com', role: 'Moderator' },
  // Add more dummy data as needed
];

const UserTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });
  const [users, setUsers] = useState([]);
  const [loading,setLoading]=useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewUser({ name: '', email: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    console.log('New user added:', newUser);
    addUser()
    // Here you can add the logic to add the new user to the dummyData or send it to the server
    closeModal();
  };

  const getUsers = async ()=>{
    try {
      setLoading(true)
      const response = await apiGET(`/get-user`);
      console.log("<<<<Users",response)
      if(response.status===200){
        setUsers(response.data);
        setLoading(false)
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  }

  const addUser =async()=>{
    try {
      const payload ={
        name: newUser.name,
        phone_number:newUser.phone,
        email: newUser.email
    }
      const response = await apiPOST(`/add-user`, payload);
      console.log("<<<<Add user",response)
      if(response){
        getUsers()
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  if(loading) return <DotLoader/>

  return (
    <div className="p-4">
      <div className="flex justify-end w-full">
        <button
          onClick={openModal}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Add New User
        </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone no</th>
            <th className="py-2 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.length && users.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b text-center">{item.name}</td>
              <td className="py-2 px-4 border-b text-center">{item.email}</td>
              <td className="py-2 px-4 border-b text-center">{item.phone_number}</td>
              <td className="py-2 px-4 border-b text-center">User</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-lg mb-4">Add New User</h2>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={newUser.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleAddUser}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Add
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;

