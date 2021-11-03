import makeRequest from '../makeRequest';
import handleFetchError from '../handleFetchError';
import { apiUrls } from '../../constants';

export default function getCityNameByCoords(lat, lon) {
  return makeRequest({
    url: apiUrls.cityNameByCoords,
    params: { lat, lon },
  })
    .then(handleFetchError)
    .then((locationInfo) => {
      return locationInfo[0].name;
    });
}
