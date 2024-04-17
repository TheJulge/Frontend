import {
  formatWage,
  calculatePayIncreaseRate,
} from '@/utils/noticeDataFormetters';
import ArrowUpIcon from '@/public/images/card/arrowUpIcon.svg';
import styles from './PayIncrease.module.scss';

interface PayIncreaseProps {
  hourlyPay: number;
  originalHourlyPay: number;
}

/**
 * 시급과 시급 인상을 표시하는 컴포넌트 - Card에서 사용
 * @param {number} hourlyPay 시급 (숫자형)
 * @param {number} originalHourlyPay 가게의 원래 시급(숫자형)
 * @returns
 */

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
