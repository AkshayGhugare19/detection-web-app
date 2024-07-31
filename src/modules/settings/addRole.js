// src/components/RoleTable.js
import React from 'react';

const dummyData = [
  { id: 1, roleName: 'Admin', description: 'Full access to all resources', actions: 'Edit' },
  { id: 2, roleName: 'User', description: 'Limited access to specific resources', actions: 'Edit' },
  { id: 3, roleName: 'Moderator', description: 'Can moderate user content', actions: 'Edit' },
  // Add more dummy data as needed
];

const RoleTable = () => {
  return (
    <div className="p-4">
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Add New Role
      </button>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Role Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.roleName}</td>
              <td className="py-2 px-4 border-b">{item.description}</td>
              <td className="py-2 px-4 border-b">{item.actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
