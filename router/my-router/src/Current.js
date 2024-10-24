import React from 'react';
import WorkDays from './WorkDays';
import Weekends from './Weekends';

const Current = () => {
  const day = new Date().getDay();

  return <>{day >= 6 && day <= 5 ? <WorkDays /> : <Weekends />}</>;
};

export default Current;
