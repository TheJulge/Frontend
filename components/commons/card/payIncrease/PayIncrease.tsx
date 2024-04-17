import styles from './PayIncrease.module.scss';
import { formatWage } from '@/utils/noticeDataFormetters';
import ArrowUpIcon from '@/public/images/card/arrowUpIcon.svg';

interface PayIncreaseProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

export default function PayIncrease({
  hourlyPay,
  originalHourlyPay,
}: PayIncreaseProps) {
  return (
    <div className={styles.payInfo}>
      <span className={styles.pay}>{formatWage(hourlyPay)}</span>
      <div className={styles.payIncrease}>
        <span>기존 시급보다 30%</span>
        <ArrowUpIcon />
      </div>
    </div>
  );
}
