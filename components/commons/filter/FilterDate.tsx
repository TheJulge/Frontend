import React from 'react';
import Calendar from '../calendar/Calendar';
import styles from './FilterDate.module.scss';

/**
 * @param {Object} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */

export default function FilterDate({
  startDate,
  setStartDate,
}: {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <div className={styles.filterDate}>
      <label htmlFor="calendar">시작일</label>
      <Calendar startDate={startDate} setStartDate={setStartDate} />
    </div>
  );
}
