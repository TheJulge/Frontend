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

type MoneyInputProps = {
  labelName: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const MINIMUM_WAGE = '9,860';

export default function MoneyInput({
  labelName,
  value,
  setValue,
}: MoneyInputProps) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setValue(formattedValue);
  };
  const handleFocusOut = () => {
    if (Number(value) < Number(MINIMUM_WAGE)) {
      setValue(MINIMUM_WAGE);
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
