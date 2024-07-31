import React from 'react';
import NumberPlateEventTable from '../modules/numberPlateDetectionTables/NumberPlateEventTables';

const NumberPlateDetectionEvents=()=> {
  return (
    <div>
      <h1 className="text-2xl font-bold">Number plate Detection events</h1>
      <p>Content for Number plate detection page.</p>
      <NumberPlateEventTable/>
    </div>
  );
}

export default NumberPlateDetectionEvents;
