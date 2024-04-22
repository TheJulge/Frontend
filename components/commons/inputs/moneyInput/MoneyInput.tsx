import styles from '@/components/commons/inputs/moneyInput/MoneyInput.module.scss';
import { InputProps } from '@/types/inputTypes';
import React from 'react';
import { Control, useController } from 'react-hook-form';

/**
 * @param {object} props
 * @param {string} props.labelName label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {Control} control react-hoook-form을 통해 인풋 감지
 */

interface MoneyInputProps extends InputProps {
  control: Control;
}
/**
 *
 * @param {string} formattedValue 포메팅할 값
 * @returns {string} 숫자 3자리 마다 들어간 콤마 제거된 문자열
 */
const removeComma = (formattedValue: string): string => {
  return formattedValue.replace(/\D/g, '');
};
/**
 *
 * @param {string} InputValue 포메팅할 값
 * @returns {string} 숫자를 제외한 문자들 공백으로 변환 및 숫자 3자리마다 콤마 삽입된 문자열
 */
const formatWage = (InputValue: string): string => {
  const numericValue = InputValue.replace(/\D/g, '');
  const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedValue;
};

const MINIMUM_WAGE = 9860;

export default function MoneyInput({ labelName, control }: MoneyInputProps) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: labelName,
    control,
    defaultValue: '',
    rules: { required: true },
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatWage(value);
    inputProps.onChange(formattedValue);
  };

  const handleBlur = () => {
    const value = Number(removeComma(inputProps.value));
    if (value < MINIMUM_WAGE) {
      inputProps.onChange(formatWage(String(MINIMUM_WAGE)));
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <div className={styles.position}>
        <input
          id={labelName}
          className={styles.input}
          type="text"
          placeholder="입력"
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputProps.value}
        />
        <div className={styles.won}>원</div>
      </div>
    </div>
  );
}
