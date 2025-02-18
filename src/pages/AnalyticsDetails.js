// src/components/AnalyticsDetails.js
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { apiGET } from '../utilities/apiHelpers';
import DotLoader from '../components/DotLoader';


const AnalyticsDetails = () => {
  const param = useParams()
  const [analyticsData,setAnalyticsData]=useState('')
  const [loading,setLoading]=useState(false)
  console.log("eee",analyticsData)

  const getAnalyticsData = async()=>{
    try {
      setLoading(true)
      const response = await apiGET(`/get-analytics-by/${param.id}`);
      console.log("<<<<$$$$",response)
      if(response){
        setAnalyticsData(response.data);
        setLoading(false)
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    getAnalyticsData()
  },[])

  if(loading) return <DotLoader/>

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-8">
      <div className="lg:w-1/2 w-full p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Detected Image</h2>
          {/* <img src={"https://i.ibb.co/4jM2gVZ/image-8.png"} alt="Detection" className="w-full h-auto rounded shadow-md" /> */}
          <img src={analyticsData?.images} alt="Detection" className="w-full h-auto rounded shadow-md" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Detected Video</h2>
          {/* <ReactPlayer url={"https://cdn.pixabay.com/video/2021/01/07/61412-498529684_large.mp4"} controls className="rounded shadow-md" width="100%" /> */}
          <ReactPlayer url={analyticsData?.videos} controls className="rounded shadow-md" width="100%" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 mt-10">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-3xl font-bold mb-4">Detected Details</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Time of Detection:</h3>
            <p className="text-gray-700">{analyticsData?.created_at}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Camera Name:</h3>
            <p className="text-gray-700">{"Camera 1"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDetails;
