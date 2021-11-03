import React from 'react';
import { apiAttributionText } from '../../constants';
import './apiAttribution.scss';

export default function ApiAttribution() {
  return (
    <footer className="api-attribution">
      <div className="container">
        <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          {apiAttributionText}
        </a>
      </div>
    </footer>
  );
}
