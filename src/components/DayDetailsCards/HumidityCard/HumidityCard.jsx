import React from 'react';
import getHumidityLevelDescription from './getHumidityLevelDescription';
import BarChartCard from '../BarChartCard/BarChartCard';

export default function HumidityCard({ humidity }) {
  return (
    <BarChartCard
      title="Humidity"
      value={humidity}
      description={getHumidityLevelDescription(humidity)}
    />
  );
}
