import React, { useState } from 'react';
import WeatherInfoSection from '../MainPage/WeatherInfoSection/WeatherInfoSection';
import HourlyTemperatureChart from './HourlyTemperatureChart/HourlyTemperatureChart';
import ContentSwitchButtons from './ContentSwitchButtons/ContentSwitchButtons';
import HourlyDetailedForecast from './HourlyDetailedForecast/HourlyDetailedForecast';
import './hourlyForecast.scss';

export default function HourlyForecast({ hourlyWeather }) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  function renderContent() {
    switch (currentContentIndex) {
      case 0:
        return (
          <HourlyTemperatureChart hourlyWeather={hourlyWeather.slice(0, 25)} />
        );
      case 1:
        return (
          <HourlyDetailedForecast hourlyWeather={hourlyWeather.slice(0, 24)} />
        );
      default:
        return <div>Something went wrong</div>;
    }
  }

  return (
    <WeatherInfoSection className="hourly-forecast">
      <header>
        <h1>{'Hourly'}</h1>
        <ContentSwitchButtons
          selectedButtonIndex={currentContentIndex}
          selectButton={setCurrentContentIndex}
        />
      </header>
      {renderContent()}
    </WeatherInfoSection>
  );
}
