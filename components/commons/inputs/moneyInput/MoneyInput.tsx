import styles from '@/components/commons/inputs/moneyInput/MoneyInput.module.scss';
import React, { useState } from 'react';

type MoneyInputProps = {
  labelName: string;
};

const MINIMUM_WAGE = 9860;

export default function MoneyInput({ labelName }: MoneyInputProps) {
  const [money, setMoney] = useState<number>(0);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMoney(Number(event.currentTarget.value));
  };
  const handleFocusOut = (event: React.FormEvent<HTMLInputElement>) => {
    if (money < MINIMUM_WAGE) {
      setMoney(MINIMUM_WAGE);
      event.currentTarget.value = MINIMUM_WAGE;
    }
  };

  return (
    <label className={styles.moneyInputLabel} htmlFor={labelName}>
      <span>{labelName}</span>
      <input
        id={labelName}
        type="number"
        placeholder="입력"
        onChange={handleChange}
        onBlur={handleFocusOut}
      />
      <div className={styles.won}>원</div>
    </label>
  );
}
