import React from 'react';
import styles from './FilterAmount.module.scss';
import MoneyInput from '../inputs/moneyInput/MoneyInput';

export default function FilterAmount({
  money,
  setMoney,
}: {
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className={styles.filterAmount}>
      <MoneyInput labelName="금액" value={money} setValue={setMoney} />
    </div>
  );
}
