import React, { useEffect, useState } from 'react';
import FireAnylitcsTable from '../modules/fireDetectionTables/FireAnylitcsTable';
import { apiGET } from '../utilities/apiHelpers';

const FireDetectionAnalyitcs =()=> {
  const [fireDetectionData,setFireDetectionData]=useState('')

  const getData = async()=>{
    try {
      const response = await apiGET(`/get-fire`);
      console.log("<<<<Fire",response)
      if(response.status===200){
        setFireDetectionData(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1 className="text-2xl font-bold">Fire Detection Analytics</h1>
      <p>Content for fire detection page.</p>
      <FireAnylitcsTable fireDetectionData={fireDetectionData}/>
    </div>
  );
}

export default FireDetectionAnalyitcs;
