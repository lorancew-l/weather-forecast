import React from 'react';
import './sunCard.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import { ReactComponent as SunriseIcon } from '../../../images/icons/sunrise.svg';
import { ReactComponent as SunsetIcon } from '../../../images/icons/sunset.svg';

export default function SunCard({ sunrise, sunset }) {
  const sunriseDate = new Date(sunrise);
  const sunsetDate = new Date(sunset);

  return (
    <WeatherCard title="Sunrise & Sunset">
      <div className="sun-card">
        <div className="date">
          <SunriseIcon />
          <time dateTime={sunriseDate.toISOString()} className="value">
            {sunriseDate.toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </time>
        </div>
        <div className="date">
          <SunsetIcon />
          <time dateTime={sunsetDate.toISOString()} className="value">
            {sunsetDate.toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </time>
        </div>
      </div>
    </WeatherCard>
  );
}
