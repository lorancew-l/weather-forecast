import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './windCard.scss';
import getWindDerectionFromDegrees from './getWindDerectionFromDegrees';
import { ReactComponent as PointerIcon } from '../../../images/icons/pointer.svg';
import { units } from '../../../constants';

export default function WindCard({ windData }) {
  return (
    <WeatherCard title="Wind" description>
      <div className="wind-card center">
        <div className="speed">
          <span className="value">{windData.speed}</span>
          <span className="unit">{units.speed}</span>
        </div>
        <div className="gust">
          <span className="value">Gust {windData.gust}</span>
          <span className="unit">{units.speed}</span>
        </div>
      </div>
      <div className="wind-direction">
        <div className="compass">
          <PointerIcon
            className="needle"
            style={{ transform: `rotate(${windData.deg}deg)` }}
          />
        </div>
        <div className="direction-name">
          {getWindDerectionFromDegrees(windData.deg)}
        </div>
      </div>
    </WeatherCard>
  );
}
