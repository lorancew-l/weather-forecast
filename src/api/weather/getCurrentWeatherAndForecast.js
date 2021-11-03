import makeRequest from '../makeRequest';
import handleFetchError from '../handleFetchError';
import { apiUrls } from '../../constants';

export default function getCurrentWeatherAndForecast(lat, lon) {
  return makeRequest({
    url: apiUrls.weatherByCoords,
    params: {
      lat: lat,
      lon: lon,
      units: 'metric',
    },
  })
    .then(handleFetchError)
    .then((weatherForecast) => weatherForecast);
}
