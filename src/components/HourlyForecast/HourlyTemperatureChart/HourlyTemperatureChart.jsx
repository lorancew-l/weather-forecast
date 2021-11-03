import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  LabelList,
} from 'recharts';
import {
  xTickFormatter,
  labelFormatter,
  getTicks,
  prepareHourlyWeatherChartData,
} from './chartUtils';
import XAxisTick from './XAxisTick';
import TemperatureLabel from './TemperatureLabel';
import { useTemperatureScaleContext } from '../../../utils/hooks/useTemperatureScaleContext/useTemperatureScaleContext';
import { convertTemperatureFromCelsius } from '../../../utils/hooks/useTemperatureScaleContext/temperatureConversion';
import colors from '../../../scss/colors.module.scss';

export default function HourlyTemperatureChart({ hourlyWeather }) {
  const { temperatureScale } = useTemperatureScaleContext();

  const labels = hourlyWeather.map((hourWeather) =>
    convertTemperatureFromCelsius(temperatureScale, hourWeather.temp)
  );
  const chartData = prepareHourlyWeatherChartData(hourlyWeather);

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer height="99%">
        <AreaChart
          data={chartData}
          margin={{ bottom: 30, top: 35, left: 0, right: 0 }}
        >
          <Area
            isAnimationActive={false}
            dataKey="temp"
            stroke={colors.orange}
            strokeWidth="2"
            fill={colors.orange}
            fillOpacity="0.25"
          >
            <LabelList
              dataKey="temp"
              position="top"
              offset={10}
              content={<TemperatureLabel labels={labels} />}
              formatter={labelFormatter}
            />
          </Area>
          <YAxis domain={[0, 'dataMax']} hide={true} />
          <XAxis
            dataKey="dt"
            stroke={colors.orange}
            strokeWidth="2"
            minTickGap={0}
            ticks={getTicks(hourlyWeather)}
            mirror={true}
            tick={<XAxisTick />}
            tickFormatter={(dateTimestamp) =>
              xTickFormatter(dateTimestamp, hourlyWeather[0].dt)
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
