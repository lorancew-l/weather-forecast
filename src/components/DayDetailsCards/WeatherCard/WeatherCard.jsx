import React from 'react';
import './weatherCard.scss';

export default function WeatherCard({ children, title, description }) {
  return (
    <div className={description ? 'weather-card description' : 'weather-card'}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
