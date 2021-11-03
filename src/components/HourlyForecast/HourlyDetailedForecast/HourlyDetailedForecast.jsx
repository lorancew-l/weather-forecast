import React from 'react';
import './hourlyDetailedForecast.scss';
import HourDetails from './HourDetails';
import Slider from '../../Slider/Slider';
import getHoursCountPerSlide from './getHoursCountPerSlide';

export default function HourlyDetailedForecast({ hourlyWeather }) {
  return (
    <Slider
      className="hourly-slider"
      itemsGap={0}
      getItemsCountPerSlide={getHoursCountPerSlide}
      getNewItemsCountPerSlide={getHoursCountPerSlide}
    >
      {hourlyWeather.map((hourDetails) => (
        <HourDetails key={hourDetails.dt} hourDetails={hourDetails} />
      ))}
    </Slider>
  );
}
