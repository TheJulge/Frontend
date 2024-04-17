import styles from './PayIncrease.module.scss';
import {
  formatWage,
  calculatePayIncreaseRate,
} from '@/utils/noticeDataFormetters';
import ArrowUpIcon from '@/public/images/card/arrowUpIcon.svg';

interface PayIncreaseProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

export default function PayIncrease({
  hourlyPay,
  originalHourlyPay,
}: PayIncreaseProps) {
  const increaseRate = calculatePayIncreaseRate(hourlyPay, originalHourlyPay);
  return (
    <div className={styles.payInfo}>
      <span className={styles.pay}>{formatWage(hourlyPay)}</span>
      {hourlyPay > originalHourlyPay && (
        <div className={styles.payIncrease}>
          <span>{increaseRate}</span>
          <ArrowUpIcon />
        </div>
      )}
    </div>
  );
}
