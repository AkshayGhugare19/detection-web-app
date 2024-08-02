import React, { useState } from 'react';
import { apiPOST } from '../utilities/apiHelpers';

const NumberPlateDetectionEvents = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSendEmail =async () => {
    // Implement email sending logic here
    console.log('Sending email to:', email);
    console.log('Email message:', emailMessage);
    const payload={
      subject:"ok ok",
      body:emailMessage,
      recever_Emails:email 
    }
    const response = await apiPOST(`/send-mail`,payload)
    if(response){
      alert("Mail send successful")
    }
  };

  const handleSendWhatsapp = () => {
    // Implement WhatsApp sending logic here
    console.log('Sending WhatsApp message to:', mobileNumber);
    console.log('WhatsApp message:', whatsappMessage);
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
        <button
          onClick={()=>handleSendEmail()}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Send Email
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
        <button
          onClick={handleSendWhatsapp}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Send WhatsApp
        </button>
      </div>
    </div>
  );
};

export default NumberPlateDetectionEvents;
