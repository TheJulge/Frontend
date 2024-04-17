import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import React from 'react';
import styles from './FilterDate.module.scss';

/**
 *
 * @param {Object} props
 * @param {Date} props.date 캘린더 날짜
 * @param {() => void} props.decreaseMonth 이전 달로 넘어가는 함수
 * @param {() => void} props.increaseMonth 다음 달로 넘어가는 함수
 * @param {Date | null} props.startDate 시작일 값
 * @param {React.Dispatch<React.SetStateAction<Date | null>>} props.setStartDate 시작일 값 결정
 */

type CustomHeaderProps = {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
};

function CustomHeader({
  date,
  decreaseMonth,
  increaseMonth,
}: CustomHeaderProps) {
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

export default function FilterDate({
  startDate,
  setStartDate,
}: {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) {
  return (
    <div className={styles.filterDate}>
      <h6>시작일</h6>
      <DatePicker
        className={styles.filterCalendar}
        dayClassName={d =>
          startDate &&
          d.getFullYear() === startDate.getFullYear() &&
          d.getMonth() === startDate.getMonth() &&
          d.getDate() === startDate.getDate()
            ? styles.selectedDay
            : styles.unselectedDay
        }
        locale={ko}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="yyyy년 MM월 dd일"
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <CustomHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
          />
        )}
      />
    </div>
  );
}
