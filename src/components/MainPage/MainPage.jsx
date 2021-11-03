import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import getCurrentWeatherAndForecast from '../../api/weather/getCurrentWeatherAndForecast';
import useFetch from '../../utils/hooks/useFetch';
import CurrentWeather from '../CurrrentWeather/CurrentWeather';
import DailyForecast from '../DailyForecast/DailyForecast';
import DayDetailsCards from '../DayDetailsCards/DayDetailsCards';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import Header from '../Header/Header';
import './mainPage.scss';
import useGeolocationPromt from './useGeolocationPromt';
import ApiAttribution from '../ApiAttribution/ApiAttribution';

export default function MainPage() {
  const [selectedDay, setSelectedDay] = useState();

  useGeolocationPromt();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const {
    data: cityWeather,
    fetchData: updateCityWeather,
    loading,
    error,
  } = useFetch(getCurrentWeatherAndForecast);

  useEffect(() => {
    updateCityWeather(lat, lon);
  }, [lat, lon, updateCityWeather]);

  useEffect(() => {
    if (!cityWeather) {
      return;
    }

    setSelectedDay(cityWeather.daily[0]);
  }, [cityWeather]);

  function selectDay(dayDateTime) {
    return setSelectedDay(
      cityWeather.daily.find((day) => day.dt === dayDateTime)
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header alerts={cityWeather.alerts} />
      <main className="main">
        <div className="container">
          <CurrentWeather weatherData={cityWeather.current} />
          <HourlyForecast hourlyWeather={cityWeather.hourly} />
          <DailyForecast
            dailyWeather={cityWeather.daily}
            selectDay={selectDay}
            selectedDay={selectedDay}
          />
          <DayDetailsCards selectedDayData={selectedDay} />
        </div>
      </main>
      <ApiAttribution />
    </>
  );
}
