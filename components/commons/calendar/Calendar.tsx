import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import CalendarHeader from './CalendarHeader';
import styles from './Calendar.module.scss';

/**
 * 캘린더 컴포넌트 입니다.
 * @param {Object} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */

export interface CalendarProps {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function Calendar({ startDate, setStartDate }: CalendarProps) {
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
      onChange={date => setStartDate(date!)}
      dateFormat="yyyy년 MM월 dd일"
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CalendarHeader
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
      )}
    />
  );
}
