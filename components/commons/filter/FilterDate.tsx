import React from 'react';
import styles from './FilterDate.module.scss';
import Calendar, { CalendarProps } from '../calendar/Calendar';

/**
 * filter 시작일에 대한 컴포넌트 입니다.
 * @param {Object} props.startDate 시작일 값
 * @param {function} props.setStartDate 시작일 값 결정
 */

export default function FilterDate({ startDate, setStartDate }: CalendarProps) {
  return (
    <div className={styles.filterDate}>
      <label htmlFor="calendar">시작일</label>
      <Calendar startDate={startDate} setStartDate={setStartDate} />
    </div>
  );
}
