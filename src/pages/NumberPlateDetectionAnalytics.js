import React, { useEffect, useState } from 'react';
import NumberPlateAnylitcsTable from '../modules/numberPlateDetectionTables/NumberPlateAnylitcsTable';
import { apiGET } from '../utilities/apiHelpers';

const NumberPlateDetectionAnalytics=()=> {
  const [NumberPlateDetectionData,setNumberPlateDetectionData]=useState('')

  const getData = async()=>{
    try {
      const response = await apiGET(`/get-numberplate`);
      console.log("<<<<Number plate",response)
      if(response.status===200){
        setNumberPlateDetectionData(response.data);
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
      <h1 className="text-2xl font-bold">Number plate Detection Analytics</h1>
      <p>Content for Number plate detection page.</p>
      <NumberPlateAnylitcsTable NumberPlateDetectionData={NumberPlateDetectionData}/>
    </div>
  );
}

export default NumberPlateDetectionAnalytics;
