import styles from './FilterAmount.module.scss';
import MoneyInput from '../inputs/moneyInput/MoneyInput';

export default function FilterAmount() {
  return (
    <div className={styles.filterAmount}>
      <MoneyInput labelName="금액" />
    </div>
  );
}
