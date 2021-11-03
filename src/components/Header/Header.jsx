import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import './header.scss';
import WeatherAlertsButton from './WeatherAlerts/WeatherAlertsButton';

export default function Header({ alerts }) {
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <div className="title">Weather Forecast</div>
          <SearchBox />
          <WeatherAlertsButton alerts={alerts ? alerts : []} />
        </div>
      </div>
    </header>
  );
}
