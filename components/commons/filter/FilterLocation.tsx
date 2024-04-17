import { LOCATION_FILTER } from '@/utils/constants/toastConstants';
import React from 'react';
import CloseIcon from '@/public/images/filter/close.svg';
import styles from './FilterLocation.module.scss';

/**
 *
 * @param {Object} props
 * @param {Select[]} props.selectLocation 주소 값
 * @param {React.Dispatch<React.SetStateAction<Location[]>>} props.setSelectLocation 주소 값 결정
 */
interface Location {
  id: number;
  name: string;
}
export default function FilterLocation({
  selectLocation,
  setSelectLocation,
}: {
  selectLocation: Location[];
  setSelectLocation: React.Dispatch<React.SetStateAction<Location[]>>;
}) {
  const location = LOCATION_FILTER;

  const handleLocation = (id: number, name: string) => {
    if (!selectLocation.some(item => item.id === id)) {
      setSelectLocation(prev => [...prev, { id, name }]);
    }
  };

  const handleLocationDelete = (id: number) => {
    setSelectLocation(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className={styles.filterLocation}>
      <h6>위치</h6>
      <div className={styles.locationBox}>
        <ul className={styles.locationContainer}>
          {location.map(({ id, name }) => {
            return (
              <li key={id}>
                <button type="button" onClick={() => handleLocation(id, name)}>
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {selectLocation.length > 0 ? (
        <ul className={styles.selectLocation}>
          {selectLocation.map(({ id, name }) => {
            return (
              <li key={id}>
                {name}
                <button
                  type="button"
                  aria-label="삭제"
                  onClick={() => handleLocationDelete(id)}
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
