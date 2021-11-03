import { units } from '../../../constants';

export function xTickFormatter(tickDateTimestamp) {
  const tickDate = new Date(tickDateTimestamp * 1000);

  return tickDate.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  });
}

export function labelFormatter(label) {
  return `${Math.round(label)}${units.temperature}`;
}

export function getTicks(hourlyWeather) {
  return hourlyWeather
    .filter((_, index) => {
      const isFirstIndex = index === 0;
      const isLastIndex = index === 24;

      return !(isFirstIndex || isLastIndex || index % 4);
    })
    .map((value) => value.dt);
}

function normalizeChartData(hourlyWeather) {
  const temperatures = hourlyWeather.map((hourWeather) => hourWeather.temp);

  const zeroOffset = 1;

  const maxTemperature = Math.max(...temperatures);
  const minTemperature = Math.min(...temperatures);

  const range = maxTemperature - minTemperature;

  const normalizedChartData = hourlyWeather.map((hourWeather) => {
    hourWeather.temp = (hourWeather.temp - minTemperature) / range + zeroOffset;

    return hourWeather;
  });

  return normalizedChartData;
}

export function prepareHourlyWeatherChartData(hourlyWeather) {
  hourlyWeather = hourlyWeather.slice();

  for (let index = 0; index < hourlyWeather.length; index++) {
    const hourWeather = {
      temp: hourlyWeather[index].temp,
      dt: hourlyWeather[index].dt,
    };

    hourlyWeather[index] = hourWeather;
  }

  hourlyWeather = normalizeChartData(hourlyWeather);

  return hourlyWeather;
}
