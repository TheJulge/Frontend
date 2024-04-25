import React from 'react';
import styles from './FilterAmount.module.scss';
import FilterMoneyInput from './FilterMoneyInput';

/**
 * filter 금액에 대한 컴포넌트 입니다.
 * @param {string} props.money 금액 값
 * @param {function} props.setMoney 금액 값 결정
 */
interface MoneyProps {
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterAmount({ money, setMoney }: MoneyProps) {
  return (
    <div className={styles.filterAmount}>
      <FilterMoneyInput labelName="금액" value={money} setValue={setMoney} />
    </div>
  );
}
