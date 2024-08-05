import React, { useEffect, useState } from 'react';
import FireAnylitcsTable from '../modules/fireDetectionTables/FireAnylitcsTable';
import { apiGET } from '../utilities/apiHelpers';
import DotLoader from '../components/DotLoader';

const FireDetectionAnalyitcs =()=> {
  const [fireDetectionData,setFireDetectionData]=useState('')
  const [loading,setLoading]=useState(false)

  const getData = async()=>{
    try {
      setLoading(true)
      const response = await apiGET(`/get-fire`);
      console.log("<<<<Fire",response)
      if(response.status===200){
        setFireDetectionData(response.data);
        setLoading(false)
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  if(loading) return <DotLoader/>

  return (
    <div>
      <h1 className="text-2xl font-bold">Fire Detection Analytics</h1>
      <p>Content for fire detection page.</p>
      <FireAnylitcsTable fireDetectionData={fireDetectionData}/>
    </div>
  );
}

export default FireDetectionAnalyitcs;
