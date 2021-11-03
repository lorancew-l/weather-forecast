import { ReactComponent as DropIcon } from '../../../images/icons/drop.svg';
import { ReactComponent as BarometerIcon } from '../../../images/icons/barometer.svg';
import { ReactComponent as CloudsIcon } from '../../../images/icons/clouds.svg';
import { ReactComponent as AnemometerIcon } from '../../../images/icons/anemometer.svg';
import { ReactComponent as VisibilityIcon } from '../../../images/icons/visibility.svg';
import { ReactComponent as ThermometerIcon } from '../../../images/icons/thermometer.svg';
import { units } from '../../../constants';

export default function getDetails() {
  return [
    {
      name: 'feels_like',
      icon: ThermometerIcon,
      label: 'feels like',
      unit: units.temperature,
      valueFormatter: (value) => value.toFixed(0),
    },
    {
      name: 'clouds',
      icon: CloudsIcon,
      label: 'clouds',
      unit: units.clouds,
    },
    {
      name: 'visibility',
      icon: VisibilityIcon,
      label: 'visibility',
      unit: units.distance,
    },
    {
      name: 'wind_speed',
      icon: AnemometerIcon,
      label: 'wind speed',
      unit: units.speed,
    },
    {
      name: 'pressure',
      icon: BarometerIcon,
      label: 'pressure',
      unit: units.pressure,
    },
    {
      name: 'humidity',
      icon: DropIcon,
      label: 'humidity',
      unit: units.humidity,
    },
  ];
}
