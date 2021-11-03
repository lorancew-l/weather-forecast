import React from 'react';
import './moonCard.scss';
import WeatherCard from '../WeatherCard/WeatherCard';
import getMoonPhaseData from './getMoonPhaseData';
import { ReactComponent as MoonriseIcon } from '../../../images/icons/moonrise.svg';
import { ReactComponent as MoonsetIcon } from '../../../images/icons/moonset.svg';

export default function MoonCard({ moonset, moonrise, moonPhase }) {
  const moonriseDate = new Date(moonrise);
  const moonsetDate = new Date(moonset);
  const moonPhaseData = getMoonPhaseData(moonPhase);

  const MoonPhaseIcon = moonPhaseData.icon;

  return (
    <WeatherCard title="Moonrise & Moonset" description>
      <div className="moon-card">
        <div className="date">
          <MoonriseIcon />
          <time dateTime={moonriseDate.toISOString()} className="value">
            {moonriseDate.toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </time>
        </div>
        <div className="date">
          <MoonsetIcon />
          <time dateTime={moonsetDate.toISOString()} className="value">
            {moonsetDate.toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: 'numeric',
            })}
          </time>
        </div>
      </div>
      <div className="moon-phase">
        <MoonPhaseIcon className="icon" />
        <span className="name"> {moonPhaseData.name}</span>
      </div>
    </WeatherCard>
  );
}
