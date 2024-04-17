import React from 'react';
import styles from './FilterButton.module.scss';

/**
 * @param {function} props.setSelectLocation 주소 값 결정
 * @param {function} props.setStartDate 시작일 값 결정
 * @param {function} props.setMoney 금액 값 설정
 */

interface Location {
  id: number;
  name: string;
}

export default function FilterButton({
  setSelectLocation,
  setStartDate,
  setMoney,
}: {
  setSelectLocation: React.Dispatch<React.SetStateAction<Location[]>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleInitialization = () => {
    setSelectLocation([]);
    setStartDate(new Date());
    setMoney('');
  };
  return (
    <div className={styles.filterButton}>
      <button type="button" onClick={handleInitialization}>
        초기화
      </button>
      <button type="button">적용하기</button>
    </div>
  );
}
