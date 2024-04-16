import { LOCATION_FILTER } from '@/utils/constants/toastConstants';
import { useState } from 'react';
import CloseIcon from '@/public/images/filter/close.svg';
import styles from './FilterLocation.module.scss';

export default function FilterLocation() {
  const [selectLocation, setSelectLocation] = useState<string[]>([]);
  const location = LOCATION_FILTER;

  const handleLocation = (name: string) => {
    if (!selectLocation.includes(name)) {
      setSelectLocation(prev => [...prev, name]);
    }
  };
  const handleLocationDelete = (name: string) => {
    setSelectLocation(prev => prev.filter(item => item !== name));
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

      {selectLocation.length > 0 ? (
        <ul className={styles.selectLocation}>
          {selectLocation.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  type="button"
                  aria-label="삭제"
                  onClick={() => handleLocationDelete(item)}
                >
                  <CloseIcon viewBox="0 0 16 16" />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
