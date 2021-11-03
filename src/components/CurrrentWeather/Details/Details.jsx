import React from 'react';
import { convertTemperatureFromCelsius } from '../../../utils/hooks/useTemperatureScaleContext/temperatureConversion';
import { useTemperatureScaleContext } from '../../../utils/hooks/useTemperatureScaleContext/useTemperatureScaleContext';
import Detail from './Detail';
import './details.scss';
import getDetails from './getDetails';

export default function Details({ weatherData }) {
  const { temperatureScale } = useTemperatureScaleContext();
  const formattedWeatherData = convertTemperatureInWeatherData();

  function convertTemperatureInWeatherData() {
    const convertedWeatherData = Object.assign({}, weatherData);
    convertedWeatherData.feels_like = convertTemperatureFromCelsius(
      temperatureScale,
      convertedWeatherData.feels_like
    );

    return convertedWeatherData;
  }

  return (
    <div className="details">
      {getDetails().map((detail) => (
        <Detail
          key={detail.name}
          Icon={detail.icon}
          label={detail.label}
          value={
            detail.valueFormatter
              ? detail.valueFormatter(formattedWeatherData[detail.name])
              : formattedWeatherData[detail.name]
          }
          unit={detail.unit}
        />
      ))}
    </div>
  );
}
