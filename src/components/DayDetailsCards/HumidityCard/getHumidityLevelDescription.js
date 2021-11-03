export const humidityLevelDescription = {
  low: 'low',
  normal: 'normal',
  high: 'high',
};

export default function getHumidityLevelDescription(humidity) {
  if (humidity >= 60) {
    return humidityLevelDescription.high;
  }
  if (humidity <= 40) {
    return humidityLevelDescription.low;
  }

  return humidityLevelDescription.normal;
}
