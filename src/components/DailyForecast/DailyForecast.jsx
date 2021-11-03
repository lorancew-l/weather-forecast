import React from 'react';
import DayForecast from './DayForecast';
import './dailyForecast.scss';
import vars from '../../scss/vars.module.scss';
import WeatherInfoSectionWithHeading from '../MainPage/WeatherInfoSection/WeatherInfoSectionWithHeading';
import Slider from '../Slider/Slider';
import getDaysCountPerSlide from './getDaysCountPerSlide';

export default function DailyForecast({
  dailyWeather,
  selectDay,
  selectedDay,
}) {
  return (
    <WeatherInfoSectionWithHeading heading="Daily" className="daily-forecast">
      <Slider
        className="daily-slider"
        selectedItemIndex={dailyWeather.findIndex(
          (dayWeather) => dayWeather.dt === selectedDay.dt
        )}
        itemsGap={parseInt(vars.dailySliderGap)}
        getItemsCountPerSlide={getDaysCountPerSlide}
        getNewItemsCountPerSlide={() =>
          parseInt(vars.dailySliderNewItemsPerSlide)
        }
      >
        {dailyWeather.map((dayWeather) => (
          <DayForecast
            key={dayWeather.dt}
            dayWeather={dayWeather}
            selectDay={() => selectDay(dayWeather.dt)}
            selected={selectedDay.dt === dayWeather.dt}
          />
        ))}
      </Slider>
    </WeatherInfoSectionWithHeading>
  );
}
