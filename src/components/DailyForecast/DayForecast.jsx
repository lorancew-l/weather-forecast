import React from 'react';
import { units, apiUrls } from '../../constants';
import { convertTemperatureFromCelsius } from '../../utils/hooks/useTemperatureScaleContext/temperatureConversion';
import { useTemperatureScaleContext } from '../../utils/hooks/useTemperatureScaleContext/useTemperatureScaleContext';

export default function DayForecast({
  dayWeather,
  selectDay,
  setRef,
  selected,
  style,
}) {
  const { temperatureScale } = useTemperatureScaleContext();

  const convertedTemperatureMax = Math.ceil(
    convertTemperatureFromCelsius(temperatureScale, dayWeather.temp.max)
  );
  const convertedTemperatureMin = Math.ceil(
    convertTemperatureFromCelsius(temperatureScale, dayWeather.temp.min)
  );

  const date = new Date(dayWeather.dt * 1000);

  return (
    <div
      className={selected ? 'day-forecast selected' : 'day-forecast'}
      onClick={selectDay}
      ref={setRef}
      style={style}
    >
      <time dateTime={date.toISOString()}>
        {date
          .toLocaleDateString(undefined, {
            weekday: 'short',
            day: 'numeric',
          })
          .replace(',', '')}
      </time>
      <div className="icon">
        <img
          src={apiUrls.getIcon(dayWeather.weather[0].icon, 2)}
          draggable="false"
          alt=""
        />
      </div>
      <div className="temperature">
        <span className="max">
          {convertedTemperatureMax}
          {units.temperature}
        </span>
        <span className="min">
          {convertedTemperatureMin}
          {units.temperature}
        </span>
      </div>
      <div className="description">{dayWeather.weather[0].description}</div>
    </div>
  );
}
