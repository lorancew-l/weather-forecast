import { temperatureScales } from './temperatureScales';

export function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convertTemperatureFromCelsius(temperatureScale, celsius) {
  switch (temperatureScale) {
    case temperatureScales.celsius:
      return celsius;
    case temperatureScales.fahrenheit:
      return convertCelsiusToFahrenheit(celsius);
    default:
      return celsius;
  }
}
