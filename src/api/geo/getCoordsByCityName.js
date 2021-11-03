import makeRequest from '../makeRequest';
import handleFetchError from '../handleFetchError';
import { apiUrls } from '../../constants';

export default function getCoordsByCityName(cityName) {
  return makeRequest({
    url: apiUrls.coordsByCityName,
    params: { q: cityName },
  })
    .then(handleFetchError)
    .then((locationInfo) => {
      return {
        name: locationInfo[0].name,
        lat: locationInfo[0].lat,
        lon: locationInfo[0].lon,
      };
    });
}
