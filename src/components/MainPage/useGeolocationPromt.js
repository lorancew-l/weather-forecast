import { useEffect } from 'react';
import { useHistory } from 'react-router';
import getCityNameByCoords from '../../api/geo/getCityNameByCoords';
import { appUrls } from '../../constants';
import checkGeolocationPermission from '../../utils/geolocation/checkGeolocationPermission';

export default function useGeolocationPromt() {
  const history = useHistory();

  useEffect(() => {
    checkGeolocationPermission().then((permission) => {
      if (permission.state !== 'granted') {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          getCityNameByCoords(coords.latitude, coords.longitude).then(
            (cityName) => {
              history.push(
                appUrls.getCityWeatherUrl(
                  cityName,
                  coords.latitude,
                  coords.longitude
                )
              );
            }
          );
        });
      }
    });
  }, [history]);
}
