import React from 'react';
import './weatherInfoSection.scss';

export default function WeatherInfoSection({ children, className }) {
  return (
    <section className={`weather-info-section ${className}`}>
      {children}
    </section>
  );
}
