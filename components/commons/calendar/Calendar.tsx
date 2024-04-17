import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import React from 'react';
import CustomHeader from './CustomHeader';
import styles from './Calendar.module.scss';

/**
 * @param {Object | null} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */

export default function Calendar({
  startDate,
  setStartDate,
}: {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) {
  return (
    <DatePicker
      className={styles.filterCalendar}
      id="calendar"
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
  );
}
