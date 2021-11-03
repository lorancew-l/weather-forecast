import React from 'react';
import './dayDetailsCards.scss';
import WeatherInfoSectionWithHeading from '../MainPage/WeatherInfoSection/WeatherInfoSectionWithHeading';
import WindCard from './WindCard/WindCard';
import UltravioletCard from './UltravioletCard/UltravioletCard';
import SunCard from './SunCard/SunCard';
import HumidityCard from './HumidityCard/HumidityCard';
import MoonCard from './MoonCard/MoonCard';
import PrecipitationCard from './PrecipitationCard/PrecipitationCard';

export default function DayDetailsCards({ selectedDayData }) {
  return (
    <WeatherInfoSectionWithHeading
      heading="Day details"
      className="day-details-cards"
    >
      <div className="cards">
        <WindCard
          windData={{
            deg: selectedDayData.wind_deg,
            gust: selectedDayData.wind_gust,
            speed: selectedDayData.wind_speed,
          }}
        />
        <UltravioletCard UVIndex={selectedDayData.uvi} />
        <SunCard
          sunrise={selectedDayData.sunrise * 1000}
          sunset={selectedDayData.sunset * 1000}
        />
        <MoonCard
          moonrise={selectedDayData.moonrise * 1000}
          moonset={selectedDayData.moonset * 1000}
          moonPhase={selectedDayData.moon_phase}
        />
        <HumidityCard humidity={selectedDayData.humidity} />
        <PrecipitationCard
          rain={selectedDayData.rain}
          pop={selectedDayData.pop}
        />
      </div>
    </WeatherInfoSectionWithHeading>
  );
}
