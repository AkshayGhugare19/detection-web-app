import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import backgroundVideo from '../../assets/videos/detection.mp4';
// import backgroundVideo from '../../assets/videos/dd.webm';
// import backgroundVideo from '../../assets/videos/weapon.mp4';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
        <div className="w-full max-w-md bg-transparent border shadow-lg rounded-lg">
          <div className="flex border-b border-gray-200">
            <button
              className={`w-1/2  text-xl font-bold py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-white'}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`w-1/2 text-xl font-bold  py-2 text-center ${activeTab === 'signup' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-white'}`}
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
    </div>
  );
};

export default AuthPage;
