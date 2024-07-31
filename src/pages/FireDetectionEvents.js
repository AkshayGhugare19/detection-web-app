import React from 'react';
import FireEventTable from '../modules/fireDetectionTables/FireEventTables';

const FireDetectionEvents =()=> {
  return (
    <div>
      <h1 className="text-2xl font-bold">Fire Detection events</h1>
      <p>Content for fire detection page.</p>
      <FireEventTable/>
    </div>
  );
}

export default FireDetectionEvents;
