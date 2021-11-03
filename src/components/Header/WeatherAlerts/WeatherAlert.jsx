import React from 'react';
import AlertDuration from './AlertDuration';
export default function WeatherAlert({ alert }) {
  return (
    <div className="alert">
      <p className="event-name">{`${alert.event} — ${alert.description}`}</p>
      <AlertDuration
        startDateTimestamp={alert.start}
        endDateTimestamp={alert.end}
      />
    </div>
  );
}
