import React, { useEffect, useState } from 'react';
import GunAnalyticsTable from '../modules/gunDetectionTables/GunAnylitcsTable';
import { apiGET } from '../utilities/apiHelpers';
import DotLoader from '../components/DotLoader';

const GunDetectionAnalytics=()=> {

  const [gunDetectionData,setGunDetectionData]=useState('')
  const [loading,setLoading]=useState(false)

  const getData = async()=>{
    try {
      setLoading(true)
      const response = await apiGET(`/get-weapon`);
      console.log("<<<<",response)
      if(response.status===200){
        setGunDetectionData(response.data);
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
      <h1 className="text-2xl font-bold"> Detection Analyitcs</h1>
      <p>Content for weapon detection page.</p>
      <GunAnalyticsTable gunDetectionData={gunDetectionData}/>
    </div>
  );
}

export default GunDetectionAnalytics;
