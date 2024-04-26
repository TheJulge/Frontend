import { LOCATION_FILTER } from '@/utils/constants/NOTICE';
import React from 'react';
import CloseIcon from '@/public/images/filter/close.svg';
import styles from './FilterLocation.module.scss';

/**
 * filter 위치에 대한 컴포넌트 입니다.
 * @param {Select[]} props.selectLocation 주소 값
 * @param {function} props.setSelectLocation 주소 값 결정
 */

interface LocationProps {
  selectLocation: string[];
  setSelectLocation: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterLocation({
  selectLocation,
  setSelectLocation,
}: LocationProps) {
  // 위치를 클릭하면 해당 id와 vqlue가 저장됩니다.
  // 저장되어있는 value를 클릭시 저장이 안 됩니다.
  const handleLocation = (name: string) => {
    if (!selectLocation.some(location => location === name)) {
      setSelectLocation(prev => [...prev, name]);
    }
  };

  // x 버튼 클릭시 해당 위치 value가 배열에서 사라집니다.
  const handleLocationDelete = (name: string) => {
    setSelectLocation(prev => prev.filter(location => location !== name));
  };

  return (
    <div className={styles.filterLocation}>
      <h6>위치</h6>
      <div className={styles.locationBox}>
        <ul className={styles.locationContainer}>
          {LOCATION_FILTER.map((name, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <button type="button" onClick={() => handleLocation(name)}>
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {selectLocation.length > 0 && (
        <ul className={styles.selectLocation}>
          {selectLocation.map((address, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                {address}
                <button
                  type="button"
                  aria-label="삭제"
                  onClick={() => handleLocationDelete(address)}
                >
                  <CloseIcon viewBox="0 0 16 16" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
