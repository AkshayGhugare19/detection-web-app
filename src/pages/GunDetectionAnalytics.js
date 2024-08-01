import React, { useEffect, useState } from 'react';
import GunAnalyticsTable from '../modules/gunDetectionTables/GunAnylitcsTable';
import { apiGET } from '../utilities/apiHelpers';

const GunDetectionAnalytics=()=> {

  const [gunDetectionData,setGunDetectionData]=useState('')

  const getData = async()=>{
    try {
      const response = await apiGET(`/get-weapon`);
      console.log("<<<<",response)
      if(response.status===200){
        setGunDetectionData(response.data);
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
      <h1 className="text-2xl font-bold">Gun Detection Analyitcs</h1>
      <p>Content for gun detection page.</p>
      <GunAnalyticsTable gunDetectionData={gunDetectionData}/>
    </div>
  );
}

export default GunDetectionAnalytics;
