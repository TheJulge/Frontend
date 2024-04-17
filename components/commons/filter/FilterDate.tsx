import React from 'react';
import Calendar from '../calendar/Calendar';
import styles from './FilterDate.module.scss';

/**
 * @param {Object | null} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */

export default function FilterDate({
  startDate,
  setStartDate,
}: {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}) {
  return (
    <div className={styles.filterDate}>
      <label htmlFor="calendar">시작일</label>
      <Calendar startDate={startDate} setStartDate={setStartDate} />
    </div>
  );
}
