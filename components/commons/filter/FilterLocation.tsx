import { LOCATION_FILTER } from '@/utils/constants/toastConstants';
import styles from './FilterLocation.module.scss';
import { useState } from 'react';
import CloseIcon from '@/public/images/filter/close.svg';

export default function FilterLocation() {
  const [selectLocation, setSelectLocation] = useState<string[]>([]);
  const location = LOCATION_FILTER;
  const handleLocation = (location: string) => {
    if (!selectLocation.includes(location)) {
      setSelectLocation(prev => [...prev, location]);
    }
  };
  const handleLocationDelete = (location: string) => {
    setSelectLocation(prev => prev.filter(item => item !== location));
  };
  return (
    <div className={styles.filterLocation}>
      <h6>위치</h6>
      <div className={styles.locationBox}>
        <ul className={styles.locationContainer}>
          {location.map(({ id, name }) => {
            return (
              <li key={id}>
                <button type="button" onClick={() => handleLocation(name)}>
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={styles.selectLocation}>
        {selectLocation.map((location, index) => {
          return (
            <li key={index}>
              {location}
              <button
                type="button"
                onClick={() => handleLocationDelete(location)}
              >
                <CloseIcon viewBox="0 0 16 16" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
