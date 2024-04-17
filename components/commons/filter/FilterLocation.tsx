import { LOCATION_FILTER } from '@/utils/constants/toastConstants';
import React from 'react';
import CloseIcon from '@/public/images/filter/close.svg';
import styles from './FilterLocation.module.scss';

/**
 * @param {Select[]} props.selectLocation 주소 값
 * @param {function} props.setSelectLocation 주소 값 결정
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

  // 위치를 클릭하면 해당 id와 vqlue가 저장됩니다.
  // 저장되어있는 value를 클릭시 저장이 안 됩니다.
  const handleLocation = (id: number, name: string) => {
    if (!selectLocation.some(item => item.id === id)) {
      setSelectLocation(prev => [...prev, { id, name }]);
    }
  };

  // x 버튼 클릭시 해당 위치 value가 배열에서 사라집니다.
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
