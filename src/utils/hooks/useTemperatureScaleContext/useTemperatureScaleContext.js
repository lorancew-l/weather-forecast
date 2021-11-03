import { createContext, useContext } from 'react';

export const TemperatureScaleContext = createContext();

export const useTemperatureScaleContext = () =>
  useContext(TemperatureScaleContext);
