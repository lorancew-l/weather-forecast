const ultravioletIndexDescription = {
  low: 'low',
  moderate: 'moderate',
  high: 'high',
  veryHigh: 'very high',
  extreme: 'extreme',
};

export default function getUltravioletIndexDescription(index) {
  if (index > 7) {
    index += 1;
  }

  switch (Math.floor(index / 3)) {
    case 0:
      return ultravioletIndexDescription.low;
    case 1:
      return ultravioletIndexDescription.moderate;
    case 2:
      return ultravioletIndexDescription.high;
    case 3:
      return ultravioletIndexDescription.veryHigh;
    case 4:
      return ultravioletIndexDescription.extreme;
    default:
      return '';
  }
}
