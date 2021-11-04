export const appRootUrl = '/weather-forecast/';

export const search = {
  cooldawnMs: 1000,
  placeholder: 'Location name',
};

export const apiUrls = {
  weatherByCoords: 'https://api.openweathermap.org/data/2.5/onecall',
  cityNameByCoords: 'https://api.openweathermap.org/geo/1.0/reverse',
  coordsByCityName: 'https://api.openweathermap.org/geo/1.0/direct',
  icons: 'https://openweathermap.org/img/wn/',

  getIcon(code, size) {
    return `${this.icons}${code}@${size}x.png`;
  },
};

export const appUrls = {
  getCityWeatherUrl(cityName, lat, lon) {
    const search = new URLSearchParams();
    search.append('lat', Number(lat).toFixed(4));
    search.append('lon', Number(lon).toFixed(4));

    return {
      pathname: `${appRootUrl}${cityName.toLowerCase()}`,
      search: search.toString(),
    };
  },
};

export const defaultCity = {
  name: 'Moscow',
  lat: '55.7522',
  lon: '37.6156',
  getCityWeatherUrl() {
    return appUrls.getCityWeatherUrl(this.name, this.lat, this.lon);
  },
};

export const units = {
  temperature: '°',
  speed: 'm/s',
  distance: 'm',
  pressure: 'hPa',
  humidity: '%',
  clouds: '%',
  precipitation: 'mm',
};

export const weatherAlerts = {
  noAlertsMessae: 'No alerts',
};

export const apiAttributionText =
  'Weather data provided by the openweathermap.org API';
