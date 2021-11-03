const windDirections = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

export default function getWindDerectionFromDegrees(degrees) {
  return windDirections[Math.floor((degrees + 11.25) / 22.5)];
}
