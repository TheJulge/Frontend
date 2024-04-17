import styles from '@/components/commons/inputs/timeInput/TimeInput.module.scss';
import React from 'react';
/**
 * 숫자만 입력할 수 있는 input 입니다.
 * 시간 관련한 정보가 필요할 때 사용 가능하며, 기본 단위는 시간 입니다.
 * MoneyInput이랑 달리 최저시급을 자동적으로 맞추는 기능이 필요하지 않아 따로 분리 했습니다.
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

type TimeInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function TimeInput({ value, setValue }: TimeInputProps) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setValue(formattedValue);
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
