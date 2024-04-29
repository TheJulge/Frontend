import classNames from 'classnames';
import {
  formatWage,
  calculatePayIncreaseRate,
} from '@/utils/noticeDataFormetters';
import ArrowUpIcon from '@/public/images/card/arrowUpIcon.svg';
import styles from './NoticeDetailsPay.module.scss';

interface PayIncreaseProps {
  hourlyPay: number;
  originalHourlyPay: number;
  closed: boolean;
}

/**
 * 시급과 시급 인상을 표시하는 컴포넌트 - Card에서 사용
 * @param {number} hourlyPay 시급
 * @param {number} originalHourlyPay 가게의 원래 시급
 * @returns
 */

export default function NoticeDetailsPay({
  hourlyPay,
  originalHourlyPay,
  closed,
}: PayIncreaseProps) {
  const increaseRate = calculatePayIncreaseRate(hourlyPay, originalHourlyPay);
  return (
    <div
      className={classNames(styles.payInfo, {
        [styles.closed]: closed,
      })}
    >
      <span className={styles.pay}>{formatWage(hourlyPay)}</span>
      {hourlyPay > originalHourlyPay && (
        <div
          className={classNames(styles.payIncrease, {
            [styles.highIncrease]: increaseRate >= 50,
          })}
        >
          <span>{`기존 시급보다 ${increaseRate}%`}</span>
          <ArrowUpIcon viewBox="0 0 20 20" />
        </div>
      )}
    </div>
  );
}
