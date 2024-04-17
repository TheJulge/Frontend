import React from 'react';
import styles from './FilterAmount.module.scss';
import MoneyInput from '../inputs/moneyInput/MoneyInput';

interface MoneyProps {
  money: string;
  setMoney: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterAmount({ money, setMoney }: MoneyProps) {
  return (
    <div className={styles.filterAmount}>
      <MoneyInput labelName="금액" value={money} setValue={setMoney} />
    </div>
  );
}
