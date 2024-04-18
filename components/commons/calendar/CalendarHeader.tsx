import styles from './Calendar.module.scss';

/**
 * 캘린더 커스텀 헤더 컴포넌트 입니다.
 * @param {Object} props.date 캘린더 날짜 값
 * @param {function} props.decreaseMonth 이전 달로 넘어가는 함수
 * @param {function} props.increaseMonth 다음 달로 넘어가는 함수
 */

interface CalendarHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

export default function CalendarHeader({
  date,
  decreaseMonth,
  increaseMonth,
}: CalendarHeaderProps) {
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  return (
    <div className={styles.customHeader}>
      <button type="button" onClick={decreaseMonth} aria-label="이전 달">
        {'<'}
      </button>
      <span>{`${year}년 ${month}`}</span>
      <button type="button" onClick={increaseMonth} aria-label="다음 달">
        {'>'}
      </button>
    </div>
  );
}
