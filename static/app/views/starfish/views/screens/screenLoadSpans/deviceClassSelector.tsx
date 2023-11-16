import {browserHistory} from 'react-router';

import {CompactSelect} from 'sentry/components/compactSelect';
import {t} from 'sentry/locale';
import {decodeScalar} from 'sentry/utils/queryString';
import {useLocation} from 'sentry/utils/useLocation';

export function DeviceClassSelector() {
  const location = useLocation();

  const value = decodeScalar(location.query['device.class']) ?? '';

  const options = [
    {value: '', label: t('All')},
    {value: 'high', label: t('High')},
    {value: 'medium', label: t('Medium')},
    {value: 'low', label: t('Low')},
    {value: 'Unknown', label: t('Unknown')},
  ];

  return (
    <CompactSelect
      triggerProps={{prefix: t('Device Class'), size: 'xs'}}
      value={value}
      options={options ?? []}
      onChange={newValue => {
        browserHistory.push({
          ...location,
          query: {
            ...location.query,
            ['device.class']: newValue.value,
          },
        });
      }}
    />
  );
}