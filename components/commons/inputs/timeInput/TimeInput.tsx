import styles from '@/components/commons/inputs/timeInput/TimeInput.module.scss';
import React from 'react';
/**
 * 숫자만 입력할 수 있는 input 입니다.
 * 시간 관련한 정보가 필요할 때 사용 가능하며, 기본 단위는 시간 입니다.
 * MoneyInput이랑 달리 최저시급을 자동적으로 맞추는 기능이 필요하지 않아 따로 분리 했습니다.
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

interface TimeInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const formatNumber = (InputValue: string): string => {
  // 숫자를 제외한 모든 문자를 공백으로 변환, 숫자 입력만 허용하기 위한 정규식
  const numericValue = InputValue.replace(/\D/g, '');
  // 숫자 3자리 마다 콤마 삽입
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedValue;
};

export default function TimeInput({ value, setValue }: TimeInputProps) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(formatNumber(event.currentTarget.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="time">업무 시간*</label>
      <input
        className={styles.input}
        id="time"
        value={value}
        type="text"
        placeholder="입력"
        onChange={handleChange}
      />
      <div className={styles.time}>시간</div>
    </div>
  );
}
