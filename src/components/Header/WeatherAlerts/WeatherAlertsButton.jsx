import React, { useState } from 'react';
import './weatherAlerts.scss';
import { ReactComponent as AlertIcon } from '../../../images/icons/alert.svg';
import WeatherAlerts from './WeatherAlerts';

export default function WeatherAlertsButton({ alerts }) {
  const [isAlertsOpen, setAlertsOpen] = useState(false);

  const localLanguageAlerts = alerts.filter((_, index) => index % 2 !== 0);

  return (
    <div className="weather-alerts-wrapper">
      <div
        className={isAlertsOpen ? 'alerts open' : 'alerts'}
        onClick={() => setAlertsOpen(!isAlertsOpen)}
      >
        {isAlertsOpen ? (
          <WeatherAlerts
            alerts={localLanguageAlerts}
            hideContent={() => setAlertsOpen(false)}
          />
        ) : (
          <AlertIcon className="icon" />
        )}
      </div>
      <div
        className="alert-count"
        style={{ display: isAlertsOpen ? 'none' : '' }}
      >
        {localLanguageAlerts.length}
      </div>
    </div>
  );
}
