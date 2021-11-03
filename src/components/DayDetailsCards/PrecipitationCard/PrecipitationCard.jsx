import React from 'react';
import BarChartCard from '../BarChartCard/BarChartCard';
import { units } from '../../../constants';

export default function PrecipitationCard({ rain, pop }) {
  return (
    <BarChartCard
      title="Precipitation probability"
      value={Math.ceil(pop * 100)}
      description={rain && `${rain} ${units.precipitation}`}
    />
  );
}
