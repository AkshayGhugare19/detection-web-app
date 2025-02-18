import React, { useState } from 'react';
import axios from 'axios';
import { apiPOST } from '../../utilities/apiHelpers';
import { useNavigate } from 'react-router-dom';
import SuccessAlert from '../../modals/SuccessAlert';
import ErrorAlert from '../../modals/ErrorAlert';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
      const payload = {
        "email": emailOrPhone,
        "password": password
      };
      const response = await apiPOST(`/login`, payload);
      console.log("<<<<Login", response);
      if (response.status === 200) {
        // Set user data in localStorage
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));
        setLoading(false)
        
        navigate("/");
        toast.success("Login successful");
      } else {
        console.error('Invalid credentials');
        toast.error("Invalid credentials");
        setLoading(false)

      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false)

      // Handle error (e.g., show error message)
    }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white">Email or Phone</label>
        <input
          type="text"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="mt-1 block w-full h-10 border px-2 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full h-10 border px-2  rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
      >
        {loading ? "Loading...":"Login"}
      </button>
    </form>
  );
};

export default Login;
