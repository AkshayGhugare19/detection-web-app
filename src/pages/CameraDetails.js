import React, { useState, useRef } from 'react';

const CameraDetails = () => {
  // Static data
  const detectionTime = "2024-07-31 15:45:00";
  const cameraName = "Laptop Camera";

  // State to control video playback
  const [isPlaying, setIsPlaying] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  // Start the webcam stream
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsPlaying(true);
    } catch (error) {
      console.error("Error accessing webcam: ", error);
      alert("Failed to access the webcam. Please check your camera permissions.");
    }
  };

  // Stop the webcam stream
  const stopCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null);
    }
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-8">
      {/* Left Side: Video Player */}
      <div className="lg:w-1/2 w-full p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Live Stream</h2>
          <video 
            ref={videoRef}
            autoPlay
            muted
            className="rounded shadow-md"
            width="100%"
            height="auto"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={isPlaying ? stopCamera : startCamera}
            className={`px-4 py-2 ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded flex items-center`}
          >
            {isPlaying ? 'Stop Camera' : 'Start Camera'}
          </button>
        </div>
      </div>

      {/* Right Side: Camera Information */}
      <div className="lg:w-1/2 w-full p-4 mt-10 lg:mt-0">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-3xl font-bold mb-4">Camera Details</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Time of Detection:</h3>
            <p className="text-gray-700">{detectionTime}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Camera Name:</h3>
            <p className="text-gray-700">{cameraName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CameraDetails;
