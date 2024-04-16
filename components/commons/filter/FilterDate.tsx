import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import React, { useState } from 'react';
import styles from './FilterDate.module.scss';

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

export default function FilterDate() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

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
        dateFormat="yyyy.MM.dd"
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
