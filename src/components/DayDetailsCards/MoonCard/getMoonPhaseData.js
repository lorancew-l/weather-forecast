import findRangeNumberBelongsTo from '../../../utils/findRangeNumberBelongsTo';

import { ReactComponent as NewMoonIcon } from '../../../images/icons/moon-phases/new.svg';
import { ReactComponent as WaxingCrescentIcon } from '../../../images/icons/moon-phases/waxing-crescent.svg';
import { ReactComponent as FirstQuarterIcon } from '../../../images/icons/moon-phases/first-quarter.svg';
import { ReactComponent as WaxingGibbousIcon } from '../../../images/icons/moon-phases/waxing-gibbous.svg';
import { ReactComponent as FullMoonIcon } from '../../../images/icons/moon-phases/full.svg';
import { ReactComponent as WaningGibbousIcon } from '../../../images/icons/moon-phases/waning-gibbous.svg';
import { ReactComponent as ThirdQuarterIcon } from '../../../images/icons/moon-phases/third-quarter.svg';
import { ReactComponent as WaningCrescentIcon } from '../../../images/icons/moon-phases/waning-crescent.svg';

const moonPhaseData = {
  new: {
    name: 'new moon',
    icon: NewMoonIcon,
  },
  waxingCrescent: {
    name: 'waxing crescent',
    icon: WaxingCrescentIcon,
  },
  firstQuater: {
    name: 'first quater',
    icon: FirstQuarterIcon,
  },
  waxingGibbous: {
    name: 'waxing gibbous',
    icon: WaxingGibbousIcon,
  },
  full: {
    name: 'full',
    icon: FullMoonIcon,
  },
  waningGibbous: {
    name: 'waning gibbous',
    icon: WaningGibbousIcon,
  },
  thirdQuarter: {
    name: 'third quarter',
    icon: ThirdQuarterIcon,
  },
  waningCrescent: {
    name: 'waning crescent',
    icon: WaningCrescentIcon,
  },
};

export default function getMoonPhaseData(moonPhase) {
  if (moonPhase % 0.25 === 0) {
    switch (Math.floor(moonPhase / 0.25)) {
      case 0:
        return moonPhaseData.new;
      case 1:
        return moonPhaseData.firstQuater;
      case 2:
        return moonPhaseData.full;
      case 3:
        return moonPhaseData.thirdQuarter;
      case 4:
        return moonPhaseData.new;
      default:
        return '';
    }
  }

  const rangeList = [0, 0.25, 0.5, 0.75, 1];

  switch (findRangeNumberBelongsTo(rangeList, moonPhase)) {
    case 0:
      return moonPhaseData.waxingCrescent;
    case 1:
      return moonPhaseData.waxingGibbous;
    case 2:
      return moonPhaseData.waningGibbous;
    case 3:
      return moonPhaseData.waningCrescent;
    default:
      return '';
  }
}
