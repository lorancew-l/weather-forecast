import { useState } from 'react';
import { temperatureScales } from './temperatureScales';
import { TemperatureScaleContext } from './useTemperatureScaleContext';

export default function TemperatureScaleProvider({ children }) {
  const [temperatureScale, setTemperatureScale] = useState(
    temperatureScales.celsius
  );

  return (
    <TemperatureScaleContext.Provider
      value={{
        temperatureScale,
        setTemperatureScale,
      }}
    >
      {children}
    </TemperatureScaleContext.Provider>
  );
}
