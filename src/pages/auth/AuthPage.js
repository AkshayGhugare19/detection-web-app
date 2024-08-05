import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <div className="flex border-b border-gray-200">
          <button
            className={`w-1/2 py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 text-center ${activeTab === 'signup' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>
        <div className="p-6">
          {activeTab === 'login' ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
