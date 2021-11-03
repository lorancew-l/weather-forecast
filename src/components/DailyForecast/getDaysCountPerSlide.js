import breakpoints from '../../scss/breakpoints.module.scss';
import findRangeNumberBelongsTo from '../../utils/findRangeNumberBelongsTo';

const daysPerSlide = {
  small: 2,
  medium: 3,
  large: 4,
  extraLarge: 5,
  extraExtraLarge: 6,
};

export default function getDaysCountPerSlide() {
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
      return daysPerSlide.small;
    case 1:
      return daysPerSlide.medium;
    case 2:
      return daysPerSlide.large;
    case 3:
      return daysPerSlide.extraLarge;
    case 4:
      return daysPerSlide.extraExtraLarge;
    default:
      return daysPerSlide.medium;
  }
}
