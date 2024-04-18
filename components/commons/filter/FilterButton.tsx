import React from 'react';
import styles from './FilterButton.module.scss';

/**
 * 초기화, 적용하기 버튼에 대한 컴포넌트 입니다.
 * @param {function} props.setSelectLocation 주소 값 결정
 * @param {function} props.setStartDate 시작일 값 결정
 * @param {function} props.setMoney 금액 값 설정
 */

interface Location {
  id: number;
  name: string;
}

interface ButtonProps {
  setSelectLocation: React.Dispatch<React.SetStateAction<Location[]>>;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterButton({
  setSelectLocation,
  setStartDate,
  setMoney,
}: ButtonProps) {
  // 초기화 버튼을 누르면 위치, 시작일,금액의 값이 초기화 됩니다.
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
