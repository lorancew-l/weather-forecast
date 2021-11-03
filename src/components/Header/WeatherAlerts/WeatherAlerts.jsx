import React, { useRef, useEffect } from 'react';
import { weatherAlerts } from '../../../constants';
import WeatherAlert from './WeatherAlert';

export default function WeatherAlerts({ hideContent, alerts }) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (!ref.current.contains(event.target)) {
        hideContent();
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [hideContent, alerts]);

  return (
    <>
      {alerts.length ? (
        <div className="content" ref={ref}>
          {alerts.map((alert, index) => (
            <WeatherAlert alert={alert} key={index} />
          ))}
        </div>
      ) : (
        <div className="no-alerts" ref={ref}>
          {weatherAlerts.noAlertsMessae}
        </div>
      )}
    </>
  );
}
