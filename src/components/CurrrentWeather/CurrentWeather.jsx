import React from 'react';
import { useParams } from 'react-router';
import './currentWeather.scss';
import { apiUrls, units } from '../../constants';
import Details from './Details/Details';
import { useTemperatureScaleContext } from '../../utils/hooks/useTemperatureScaleContext/useTemperatureScaleContext';
import { temperatureScales } from '../../utils/hooks/useTemperatureScaleContext/temperatureScales';
import { convertTemperatureFromCelsius } from '../../utils/hooks/useTemperatureScaleContext/temperatureConversion';

export default function CurrentWeather({ weatherData }) {
  const { cityName } = useParams();

  const { temperatureScale, setTemperatureScale } =
    useTemperatureScaleContext();

  const currentTemperature = convertTemperatureFromCelsius(
    temperatureScale,
    weatherData.temp
  );

  return (
    <section className="current-weather">
      <h1 className="city-name">{cityName}</h1>
      <div className="main-info">
        <div className="icon">
          <img src={apiUrls.getIcon(weatherData.weather[0].icon, 4)} alt="" />
        </div>
        <div className="temperature">{`${currentTemperature.toFixed(0)}${
          units.temperature
        }`}</div>
        <div className="temperature-scale">
          <button
            className={`scale-switch ${
              temperatureScale === temperatureScales.celsius ? 'selected' : ''
            }`}
            onClick={() => setTemperatureScale(temperatureScales.celsius)}
          >
            C
          </button>
          <button
            className={`scale-switch ${
              temperatureScale === temperatureScales.fahrenheit
                ? 'selected'
                : ''
            }`}
            onClick={() => setTemperatureScale(temperatureScales.fahrenheit)}
          >
            F
          </button>
        </div>
      </div>
      <div className="description">{weatherData.weather[0].description}</div>
      <Details weatherData={weatherData} />
    </section>
  );
}
