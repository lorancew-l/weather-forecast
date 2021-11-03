import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import useDebounce from '../../../utils/hooks/useDebounce';
import useFetch from '../../../utils/hooks/useFetch';
import { appUrls, search } from '../../../constants';
import getCoordsByCityName from '../../../api/geo/getCoordsByCityName';
import { ReactComponent as LensIcon } from '../../../images/icons/lens.svg';
import './searchBox.scss';

export default function SearchBox() {
  const history = useHistory();

  const [cityName, setCityName] = useState('');

  const { data: cityData, fetchData, error } = useFetch(getCoordsByCityName);
  const { debouncedFunction: debouncedFetch, cancelDebouncedFunction } =
    useDebounce((name) => {
      fetchData(name);
      setCityName('');
    }, search.cooldawnMs);

  function handleCityNameChange(cityName) {
    setCityName(cityName);

    if (!cityName) {
      cancelDebouncedFunction();
      return;
    }

    debouncedFetch(cityName);
  }

  useEffect(() => {
    if (!cityData) {
      return;
    }

    history.push(
      appUrls.getCityWeatherUrl(cityData.name, cityData.lat, cityData.lon)
    );
  }, [cityData, history]);

  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <div className="icon-container">
          <LensIcon />
        </div>
        <input
          value={cityName}
          className="input"
          placeholder={search.placeholder}
          onChange={(event) => handleCityNameChange(event.target.value)}
          onBlur={() => setCityName('')}
        />
      </div>
    </div>
  );
}
