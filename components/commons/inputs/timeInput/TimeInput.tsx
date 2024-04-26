import styles from '@/components/commons/inputs/timeInput/TimeInput.module.scss';
import React from 'react';
import { Control, useController } from 'react-hook-form';
/**
 * 숫자만 입력 가능
 * @param {Control} control
 */

interface TimeInputProps {
  control: Control;
}

const addComma = (InputValue: number): string => {
  if (typeof InputValue !== 'number') {
    return InputValue;
  }
  // 숫자를 제외한 모든 문자를 공백으로 변환, 숫자 입력만 허용하기 위한 정규식
  const numericValue = String(InputValue).replace(/\D/g, '');
  // 숫자 3자리 마다 콤마 삽입
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedValue;
};

export default function TimeInput({ control }: TimeInputProps) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'workhour',
    control,
    defaultValue: '',
    rules: { required: true },
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const removeComma = event.currentTarget.value.replace(/,/g, '');
    inputProps.onChange(Number(removeComma));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="time">업무 시간*</label>
      <input
        className={styles.input}
        id="workhour"
        type="text"
        placeholder="입력"
        onChange={handleChange}
        value={addComma(inputProps.value)}
      />
      <div className={styles.time}>시간</div>
    </div>
  );
}
