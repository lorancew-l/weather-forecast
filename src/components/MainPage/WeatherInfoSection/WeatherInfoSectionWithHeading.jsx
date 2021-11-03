import WeatherInfoSection from './WeatherInfoSection';
import React from 'react';

export default function WeatherInfoSectionWithHeading({
  heading,
  children,
  className,
}) {
  return (
    <WeatherInfoSection className={className}>
      <header>
        <h1>{heading}</h1>
      </header>
      {children}
    </WeatherInfoSection>
  );
}
