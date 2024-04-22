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
  startDate: Date | undefined;
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export default function Calendar({ startDate, setStartDate }: CalendarProps) {
  // 내일 날짜를 생성합니다.
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
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
      placeholderText="입력"
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CalendarHeader
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
      )}
      autoComplete="off"
      // 오늘 이전의 날짜 선택 금지
      minDate={tomorrow}
    />
  );
}
