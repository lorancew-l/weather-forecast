import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MainPage from './components/MainPage/MainPage';
import TemperatureScaleProvider from './utils/hooks/useTemperatureScaleContext/TemperatureScaleProvider';
import { defaultCity, appUrls } from './constants';
import getCityNameByCoords from './api/geo/getCityNameByCoords';
import getClientLocation from './utils/geolocation/getClientLocation';
import checkGeolocationPermission from './utils/geolocation/checkGeolocationPermission';
import { appRootUrl } from './constants';
import './app.scss';

function App() {
  const [redirectUrl, setRedirectUrl] = useState();

  async function resolveRedirect() {
    const permission = await checkGeolocationPermission();

    if (permission.state === 'granted') {
      const geolocation = await getClientLocation();
      const cityName = await getCityNameByCoords(
        geolocation.latitude,
        geolocation.longitude
      );

      return appUrls.getCityWeatherUrl(
        cityName,
        geolocation.latitude,
        geolocation.longitude
      );
    } else {
      return defaultCity.getCityWeatherUrl();
    }
  }

  useEffect(() => {
    resolveRedirect().then((url) => setRedirectUrl(url));
  }, []);

  if (!redirectUrl) {
    return <></>;
  }

  return (
    <Switch>
      <Route exact path={`${appRootUrl}`}>
        <Redirect to={redirectUrl} />
      </Route>
      <Route exact path={`${appRootUrl}:cityName`}>
        <TemperatureScaleProvider>
          <MainPage />
        </TemperatureScaleProvider>
      </Route>
    </Switch>
  );
}

export default App;
