import breakpoints from '../../../scss/breakpoints.module.scss';
import findRangeNumberBelongsTo from '../../../utils/findRangeNumberBelongsTo';

const hoursPerSlide = {
  small: 3,
  medium: 4,
  large: 5,
  extraLarge: 6,
  extraExtraLarge: 6,
};

export default function getHoursCountPerSlide() {
  const screenWidth = window.innerWidth;

  const rangeList = [
    0,
    parseInt(breakpoints.screenSmall),
    parseInt(breakpoints.screenMedium),
    parseInt(breakpoints.screenLarge),
    parseInt(breakpoints.screenExtraLarge),
    Infinity,
  ];

  switch (findRangeNumberBelongsTo(rangeList, screenWidth)) {
    case 0:
      return hoursPerSlide.small;
    case 1:
      return hoursPerSlide.medium;
    case 2:
      return hoursPerSlide.large;
    case 3:
      return hoursPerSlide.extraLarge;
    case 4:
      return hoursPerSlide.extraExtraLarge;
    default:
      return hoursPerSlide.medium;
  }
}
