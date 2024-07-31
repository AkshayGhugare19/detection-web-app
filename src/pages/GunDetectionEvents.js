import React from 'react';
import GunEventTable from '../modules/gunDetectionTables/GunEventTables';

const GunDetectionEvents=()=> {
  return (
    <div>
      <h1 className="text-2xl font-bold">Gun Detection Events</h1>
      <p>Content for gun detection page.</p>
      <GunEventTable/>
    </div>
  );
}

export default GunDetectionEvents;
