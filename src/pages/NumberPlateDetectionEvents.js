import React, { useState } from 'react';
import { apiPOST } from '../utilities/apiHelpers';

const NumberPlateDetectionEvents = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMail, setLoadingMail] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [whatsappError, setWhatsappError] = useState('');

  const handleSendEmail = async() => {
    if (!email || !emailMessage) {
      setEmailError('Please fill in both fields');
      return;
    }
    setEmailError('');
    // Implement email sending logic here
    console.log('Sending email to:', email);
    console.log('Email message:', emailMessage);
    setLoadingMail(true)
    const payload = {
      body: emailMessage,
      receiver_emails: [email],
      type:"number_plate"
    };

    try {
      const response = await apiPOST('/send-mail', payload);
      alert('Mail send successful');
    } catch (error) {
      alert('Failed to send WhatsApp message');
    } finally {
      setLoadingMail(false);
    }
  };

  const handleSendWhatsapp = async () => {
    if (!mobileNumber || !whatsappMessage) {
      setWhatsappError('Please fill in both fields');
      return;
    }
    setWhatsappError('');
    setLoading(true);

    console.log('Sending WhatsApp message to:', mobileNumber);
    console.log('WhatsApp message:', whatsappMessage);

    const payload = {
      phone_number: mobileNumber,
      message: whatsappMessage,
      type: 'number_plate' // Assuming type should be fire detection
    };

    try {
      const response = await apiPOST('/send-notification-on-whatsapp', payload);
      alert('WhatsApp send successful');
    } catch (error) {
      alert('Failed to send WhatsApp message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Number plate Detection Notification</h1>
      <p className="mb-4">Content for Number plate detection page.</p>

      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Send Email Notification</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={emailMessage}
            onChange={(e) => setEmailMessage(e.target.value)}
          />
        </div>
        {emailError && <p className="text-red-500 mb-4">{emailError}</p>}
        <button
          onClick={handleSendEmail}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          {loadingMail?"Sending..":"Send Email"} 
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Send WhatsApp Notification</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={whatsappMessage}
            onChange={(e) => setWhatsappMessage(e.target.value)}
          />
        </div>
        {whatsappError && <p className="text-red-500 mb-4">{whatsappError}</p>}
        <button
          onClick={handleSendWhatsapp}
          className={`px-4 py-2 text-white rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send WhatsApp'}
        </button>
      </div>
    </div>
  );
};

export default NumberPlateDetectionEvents;
