import React from 'react';
import { apiUrls, units } from '../../../constants';
import { ReactComponent as TemplateIcon } from '../../../images/icons/drop.svg';
import { convertTemperatureFromCelsius } from '../../../utils/hooks/useTemperatureScaleContext/temperatureConversion';
import { useTemperatureScaleContext } from '../../../utils/hooks/useTemperatureScaleContext/useTemperatureScaleContext';

export default function HourDetails({ hourDetails, style, setRef }) {
  const time = new Date(hourDetails.dt * 1000);

  const { temperatureScale } = useTemperatureScaleContext();

  const convertedTemperature = Math.ceil(
    convertTemperatureFromCelsius(temperatureScale, hourDetails.temp)
  );

  return (
    <div className="hour-details" ref={setRef} style={style}>
      <time dateTime={time.toISOString()}>
        {time.toLocaleTimeString(undefined, {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </time>
      <div className="icon">
        <img
          src={apiUrls.getIcon(hourDetails.weather[0].icon, 2)}
          draggable="false"
          alt=""
        />
      </div>
      <div className="temperature">
        {convertedTemperature}
        {units.temperature}
      </div>
      <div className="description">{hourDetails.weather[0].description}</div>
      <div className="humidity">
        <TemplateIcon />
        {`${hourDetails.humidity} ${units.humidity}`}
      </div>
      <div className="wind-speed">
        <TemplateIcon />
        {`${hourDetails.wind_speed} ${units.speed}`}
      </div>
    </div>
  );
}
