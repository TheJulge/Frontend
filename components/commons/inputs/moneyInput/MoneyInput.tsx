import styles from '@/components/commons/inputs/moneyInput/MoneyInput.module.scss';
import React from 'react';

/**
 * 숫자만 입력할 수 있는 input 입니다.
 * 금액 관련한 정보가 필요할 때 사용 가능하며, 기본 단위는 원 입니다.
 * 추가로 최저 시급보다 적게 입력 시 자동으로 최저 시급으로 변경합니다.
 * @param {labelName} props label로 사용할 input의 이름을 적어주면 됩니다.
 * @param {value} props 해당 인풋에서 사용할 State
 * @param {setValue} props 해당 인풋에서 사용할 state를 변경할 seter 함수
 */

interface MoneyInputProps {
  labelName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const MINIMUM_WAGE = 9860;

export default function MoneyInput({
  labelName,
  value,
  setValue,
}: MoneyInputProps) {
  const formatWage = (InputValue: string): string => {
    // 숫자를 제외한 모든 문자를 공백으로 변환, 숫자 입력만 허용하기 위한 정규식
    const numericValue = InputValue.replace(/\D/g, '');
    // 숫자 3자리 마다 콤마 삽입
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedValue;
  };

  const removeComma = (formattedValue: string): string => {
    // 숫자 3자리 마다 들어간 콤마 제거
    return formattedValue.replace(/\D/g, '');
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(formatWage(event.currentTarget.value));
  };

  const handleFocusOut = (event: React.FormEvent<HTMLInputElement>) => {
    if (Number(removeComma(event.currentTarget.value)) < MINIMUM_WAGE) {
      setValue(formatWage(String(MINIMUM_WAGE)));
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={labelName}>{labelName}</label>
      <input
        id={labelName}
        className={styles.input}
        value={value}
        type="text"
        placeholder="입력"
        onChange={handleChange}
        onBlur={handleFocusOut}
      />
      <div className={styles.won}>원</div>
    </div>
  );
}
