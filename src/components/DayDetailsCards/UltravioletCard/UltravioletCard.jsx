import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './ultravioletCard.scss';
import getUltravioletIndexDescription from './getUltravioletIndexDescritption';

export default function UltravioletCard({ UVIndex }) {
  const maxUVIndex = 12;

  return (
    <WeatherCard title="UV Index" description>
      <div className="uv-card center">
        <div className="uv-index">
          <svg viewBox="0 0 100 50">
            <clipPath id="cut-half">
              <rect x="0" y="0" width="100" height="50" />
            </clipPath>
            <circle
              className="scale"
              cx="50"
              cy="50"
              r="40"
              clipPath="url(#cut-half)"
            />
            <circle
              className="graphic-value"
              cx="50"
              cy="50"
              r="40"
              strokeDasharray={`${(UVIndex / maxUVIndex) * Math.PI * 40} ${
                Math.PI * 40 * (1 - UVIndex / maxUVIndex)
              }`}
              clipPath="url(#cut-half)"
            />
            <text className="value" y="50" x="50" textAnchor="middle">
              {Number.isInteger(Number(UVIndex.toFixed(1)))
                ? UVIndex.toFixed(0)
                : UVIndex.toFixed(1)}
            </text>
          </svg>
        </div>
      </div>
      <div className="uv-index-description">
        <span>{getUltravioletIndexDescription(UVIndex)}</span>
      </div>
    </WeatherCard>
  );
}
