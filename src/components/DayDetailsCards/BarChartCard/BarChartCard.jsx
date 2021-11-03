import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './barChartCard.scss';

export default function BarChartCard({ value, description, title }) {
  return (
    <WeatherCard title={title} description>
      <div className="bar-chart-card">
        <div className="value">{value}%</div>
        <div className="bar-background">
          <div className="bar" style={{ height: `${value}%` }}></div>
        </div>
      </div>
      <div className="bar-chart-description">
        <span>{description}</span>
      </div>
    </WeatherCard>
  );
}
